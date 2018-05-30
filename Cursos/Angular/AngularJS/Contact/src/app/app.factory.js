angular
  .module('app')
  .factory('ContactFactory', function (ContactService) {

    var factory = {};

    factory.add = add;
    factory.list = list;
    factory.edit = edit;
    factory.remove = remove;

    function add(contact) {
      ContactService.push(contact);
      console.log(ContactService.getList());
    }

    function edit(contact) {
      var list = ContactService.getList();
      var index = null;
      var contactOld = list.filter(function (el, pos) {
        index = pos;
        return el.id = contact.id;
      });

      if (index !== null) {
        return list.splice(index, 1, contact);
      }
    }

    function remove(contact) {
      var list = ContactService.getList();

      var index = null;

      var filter = list.filter(function (el, pos) {
        index = pos;
        return el.id = contact.id;
      });

      if (index !== null) {
        return list.splice(index, 1);
      }
    }

    function list() {
      return ContactService.getList();
    }

    return factory;
  });
