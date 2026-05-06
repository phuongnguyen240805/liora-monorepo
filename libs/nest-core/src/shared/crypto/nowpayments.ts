import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios from 'axios'

@Injectable()
export class Nowpayments {
  private readonly apiUrl = 'https://api.nowpayments.io/v1'
  private readonly apiKey: string

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('NOWPAYMENTS_API_KEY')!
  }

  private get headers() {
    return {
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json',
    }
  }

  async createPaymentPage(organizationId: string) {
    const response = await axios.post(
      `${this.apiUrl}/payment`,
      {
        price_amount: 99, // hoặc tính động theo plan
        price_currency: 'usd',
        pay_currency: 'btc',
        order_id: `org-${organizationId}-${Date.now()}`,
        order_description: `Subscription for organization ${organizationId}`,
        is_fixed_rate: true,
        is_fee_paid_by_user: false,
      },
      { headers: this.headers },
    )

    return {
      paymentId: response.data.payment_id,
      payAddress: response.data.pay_address,
      payAmount: response.data.pay_amount,
      paymentStatusUrl: response.data.payment_status_url,
    }
  }

  async getPaymentStatus(paymentId: string) {
    const { data } = await axios.get(`${this.apiUrl}/payment/${paymentId}`, {
      headers: this.headers,
    })
    return data
  }
}
