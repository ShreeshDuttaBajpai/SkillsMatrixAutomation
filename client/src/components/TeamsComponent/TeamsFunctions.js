export const handleFieldChange = (
    e,
    id,
    editObj,
    setEditObj,
    masterTitle,
    fieldTitle
) => {
    const fieldsArr = editObj[masterTitle];
    const fieldIndex = fieldsArr.findIndex(obj =>
        masterTitle === "employees" ? obj.employeeId === id : obj.id === id
    );
    fieldsArr[fieldIndex][fieldTitle] = e.target.value;
    setEditObj(prev => {
        return {
            ...prev,
            [masterTitle]: fieldsArr
        };
    });
};
