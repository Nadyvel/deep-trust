// one action to rule them all. 
export const setModal = (namespace, data, isVisible = null) => {
    console.log('jkldsjaf', namespace, data, isVisible)
    return {
        type: 'SET_MODAL',
        payload: { namespace, data, isVisible }
    };
};
