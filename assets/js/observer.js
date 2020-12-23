function observer() {
  const observers = [];

  function subscribe(observer) {
    observers.push(observer);
  }

  function notify(data) {
    observers.forEach((observer) => observer(data));
  }
  return {
    subscribe,
    notify,
  };
}

export default observer;
