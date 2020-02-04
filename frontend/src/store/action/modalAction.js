// one action to rule them all. 
export const setModal = (namespace, data, isVisible = null) => {
  
    return {
        type: 'SET_MODAL',
        payload: { namespace, data, isVisible }
    };
};
