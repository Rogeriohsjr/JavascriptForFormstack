// This code should clean the code when a customer click on add new item in a repeatable section.

function FF_OnAfterRender() {
    // After the Form loads, add the new click button event.
    addEventOnAllAddButton();
}

function addEventOnAllAddButton() {
    // Get all the Add button and remove the click event
    $('.ff-sec-repeat-wrapper a.ff-add').unbind('click');

    // Get all the Add button and add the new Click
    $('.ff-sec-repeat-wrapper a.ff-add').each(function () {
        $(this).bind('click', function () {
            // Add new section
            AddToRepeatableSection(this);
            // Clean the new section
            cleanFieldsInRepeatableSection(this);
            // Add the Click event
            addEventOnAllAddButton();
        });
    });

    // When we remove, we will make sure that the Add event it is added in all the add button again.
    $('.ff-sec-repeat-wrapper a.ff-remove').click(function () {
        // Add the Click event
        addEventOnAllAddButton();
    });
}

function cleanFieldsInRepeatableSection(pElement) {
    // Clear out the values from text boxes of newly added section.
    $(pElement).parents('.ff-sec-repeat-wrapper').next().find('input[type="textbox"]').val('');
    $(pElement).parents('.ff-sec-repeat-wrapper').next().find('textarea').val('');
}
