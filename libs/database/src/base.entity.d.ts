import { BaseEntity } from 'typeorm';
export declare abstract class CommonEntity extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare abstract class CompleteEntity extends CommonEntity {
    createBy: number;
    updateBy: number;
    /**
     * 不会保存到数据库中的虚拟列，数据量大时可能会有性能问题，有性能要求请考虑在 service 层手动实现
     * @see https://typeorm.io/decorator-reference#virtualcolumn
     */
    creator: string;
    updater: string;
}
