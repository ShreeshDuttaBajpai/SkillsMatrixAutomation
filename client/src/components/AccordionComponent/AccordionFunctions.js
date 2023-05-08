export const toggleAccordionOpen = (
    isAnyAccordionOpen,
    setIsAnyAccordionOpen,
    isAccordionOpen,
    setIsAccordionOpen
) => {
    if (
        (isAnyAccordionOpen && isAccordionOpen) ||
        (!isAnyAccordionOpen && !isAccordionOpen)
    ) {
        setIsAccordionOpen(prev => !prev);
        setIsAnyAccordionOpen(prev => !prev);
    }
};

export const isAccordionEventDisabled = (isAnyAccordionOpen, isAccordionOpen) =>
    isAnyAccordionOpen && !isAccordionOpen;
