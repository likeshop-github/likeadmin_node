const dayjs = require('dayjs')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 22)

module.exports = app => {
    const { STRING, INTEGER, SMALLINT, TEXT } = app.Sequelize

    const modelDefinition = {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            comment: '主键',
        },
        dept_id: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '部门ID',
        },
        post_id: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '岗位ID',
        },
        username: {
            type: STRING(32),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '用户账号',
        },
        nickname: {
            type: STRING(32),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '用户昵称',
        },
        password: {
            type: STRING(200),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '用户密码',
        },
        avatar: {
            type: STRING(200),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '用户头像',
        },
        role: {
            type: STRING(200),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '角色主键',
        },
        salt: {
            type: STRING(20),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '加密盐巴',
        },
        sort: {
            type: SMALLINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '排序编号',
        },
        is_multipoint: {
            type: SMALLINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '多端登录: 0=否, 1=是',
        },
        is_disable: {
            type: SMALLINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '是否禁用: 0=否, 1=是',
        },
        is_delete: {
            type: SMALLINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '是否删除: 0=否, 1=是',
        },
        last_login_ip: {
            type: STRING(20),
            charset: 'utf8mb4',
            collation: 'utf8mb4_general_ci',
            allowNull: false,
            defaultValue: '',
            comment: '最后登录IP',
        },
        last_login_time: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '最后登录',
        },
        create_time: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '创建时间',
        },
        update_time: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '更新时间',
        },
        delete_time: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: '删除时间',
        },
    };
    const SystemAuthAdmin = app.model.define('SystemAuthAdmin', modelDefinition, {
        createdAt: 'create_time', // 指定名字
        updatedAt: false,
        tableName: 'la_system_auth_admin', // 定义实际表名
    })

    return SystemAuthAdmin
}

