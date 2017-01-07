/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        privilege: {
            type: 'string'
        }
    },

    create: function (user, accessRight) {

        var globalPrivilege = globalServices.privilegeEmun;
        switch (accessRight) {
            case globalPrivilege.ADMIN:
                this.privilege = globalPrivilege.ADMIN;
                break;

            case globalPrivilege.CLIENT:
                this.privilege = globalPrivilege.CLIENT;
                break;

            default:
                this.privilege = 'none';
                break;
        };

        console.log('user: ', user);

        user.role = Role;
        return user;
    },

    roleTestFunction: function () {
        // console.log('role test')
    }
};

