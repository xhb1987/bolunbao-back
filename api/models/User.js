/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        password: {
            type: 'string',
            required: true
        },

        name: {
            type: 'string'
        },

        phone: {
            type: 'int',
            required: true
        },

        email: {
            type: 'string',
            required: true
        },

        verified: {
            type: 'boolean'
        },
    
        role: {

        }
    },

    init: function (user) {
        this.name = user.name;
        this.phone = user.phone;
    },

    create: function (user, success, fail) {
        var globalPrivilege = globalServices.privilegeEmun;

        this.name = user.name;
        this.password = user.password;
        this.phone = user.phone;

        User = Role.create(User, 'none');
        User.role.roleTestFunction();
        if (this.role.privilege == globalPrivilege.CLIENT) {
            User = Bookmark.create(this);
        }
        this.save(success, fail);
    },

    getName: function () {
        return this.name;
    },

    getPhone: function () {
        return this.phone;
    },

    isVerified: function () {
        return this.verified;
    },

    save: function (success, fail) {
        var user = new globalServices.AV.User();
        user.set('username', this.name);
        user.set('password', this.password);
        user.set('phone', this.phone);

        user.signUp().then(function (user) {
            success(user);
        }, function (error) {
            fail(error);
        });
    }
};

