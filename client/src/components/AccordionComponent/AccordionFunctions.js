export const toggleAccordionOpen = (
    accordionTitle,
    isAnyAccordionOpen,
    setIsAnyAccordionOpen,
    isAccordionOpen,
    setIsAccordionOpen
) => {
    if (accordionTitle !== "Categories") {
        if (
            (isAnyAccordionOpen && isAccordionOpen) ||
            (!isAnyAccordionOpen && !isAccordionOpen)
        ) {
            setIsAccordionOpen(prev => !prev);
            setIsAnyAccordionOpen(prev => !prev);
        }
    } else {
        setIsAccordionOpen(prev => !prev);
    }
};

export const isAccordionEventDisabled = (isAnyAccordionOpen, isAccordionOpen) =>
    isAnyAccordionOpen && !isAccordionOpen;
