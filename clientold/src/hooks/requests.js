async function httpGetPlanets() {
  const result = await fetch("http://localhost:8000/planet");
  return result.json();

  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const result = await fetch("http://localhost:8000/lunches");
  const fetchedData = await result.json();
  console.log('fechdaa',fetchedData);
  return fetchedData.sort((a, b) => {
    return (a.flightNumber = b.flightNumber);
  });

  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch("http://localhost:8000/lunches", {
    method: "post",
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(launch),
  });
    
  } catch (error) {
    return {
      ok:false
    }
    
  }
 
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
