import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { ClsService } from 'nestjs-cls';
import { DataSource, ObjectType } from 'typeorm';
interface Condition {
    entity: ObjectType<any>;
    /** 如果没有指定字段则使用当前验证的属性作为查询依据 */
    field?: string;
    /** 验证失败的错误信息 */
    message?: string;
}
/**
 * 验证某个字段的唯一性
 */
export declare class UniqueConstraint implements ValidatorConstraintInterface {
    private dataSource;
    private readonly cls;
    constructor(dataSource: DataSource, cls: ClsService);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
/**
 * 数据唯一性验证
 * @param entity Entity类或验证条件对象
 * @param validationOptions
 */
declare function IsUnique(entity: ObjectType<any>, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
declare function IsUnique(condition: Condition, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export { IsUnique };
