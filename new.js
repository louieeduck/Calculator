const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait
}



if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
}