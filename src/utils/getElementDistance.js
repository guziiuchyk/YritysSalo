import {setLeftDistance, setRightDistance} from "../redux/slices/globalSlice";

export const getElementDistance = (formRef, dispatch) => {
    if (formRef.current) {
        const elementRect = formRef.current.getBoundingClientRect();
        const leftDistance = elementRect.left + window.pageXOffset;
        const rightDistance = elementRect.width + leftDistance;
        dispatch(setRightDistance(rightDistance));
        dispatch(setLeftDistance(leftDistance));
    }
};