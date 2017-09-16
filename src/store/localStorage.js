// Attempt to load state from local storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("ReactzeeState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Attempt to save state to local storage
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("ReactzeeState", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
