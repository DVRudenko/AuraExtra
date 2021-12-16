({
  clickAdd: function(component, event, helper) {

    // Get the values from the form
    let n1 = component.find("num1").get("v.value");
    let n2 = component.find("num2").get("v.value");

    // Display the total in a "toast" status message
    let resultsToast = $A.get("e.force:showToast");
    resultsToast.setParams({
      "title": "Quick Add: " + n1 + " + " + n2,
      "message": "The total is: " + (Number(n1) + Number(n2)) + "."
    });
    resultsToast.fire();

    // Close the action panel
    let dismissActionPanel = $A.get("e.force:closeQuickAction");
    dismissActionPanel.fire();
  }

})