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
        var globalPrivilege = globalServices.privilegeEmun,
            userWithRole,
            userWithBookmark;

        this.name = user.name;
        this.password = user.password;
        this.phone = user.phone;
        this.role = user.role;

        if (this.role == void 0) {
            this.role = 'none';
        }

        userWithRole = Role.create(User, this.role);
        if (userWithRole) {
            User = userWithRole;
        }

        if (this.role.privilege == globalPrivilege.CLIENT) {
            userWithBookmark = Bookmark.create(User);
            if (userWithBookmark) {
                User = userWithBookmark;
            }
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

    login: function (username, password, success, fail) {
        globalServices.AV.User.logIn(username, password).then(function (user) {
            success(user);
        }, function(error) {
            fail(error);
        })
    },

    save: function (success, fail) {
        var leanUser = new globalServices.AV.User();
        leanUser.set('username', this.name);
        leanUser.set('password', this.password);
        leanUser.set('phone', this.phone);

        leanUser.signUp().then(function (user) {
            success(user);
        }, function (error) {
            fail(error);
        });
    }
};

