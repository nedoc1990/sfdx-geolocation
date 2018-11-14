({
  doInit: function(component, event) {
    var action = component.get("c.findAll");
    action.setCallback(this, function(a) {
      component.set("v.accounts", a.getReturnValue());

      let accountsLoadedEvent = $A.get("e.c:AccountsLoaded");
      accountsLoadedEvent.setParams({
        accounts: a.getReturnValue()
      });
      accountsLoadedEvent.fire();
    });
    $A.enqueueAction(action);
  }
});
