export declare enum Order {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class PagerDto<T = any> {
    page?: number;
    pageSize?: number;
    field?: string;
    order?: Order;
    _t?: number;
}
