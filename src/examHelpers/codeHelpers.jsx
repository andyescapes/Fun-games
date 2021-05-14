//set interval
React.useEffect(() => {
  setInterval(() => {
    const time = new Date();
    setTime(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  }, 1000);
}, []);

//
