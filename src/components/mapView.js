import React, {useState} from "react";

const dummyRoutes = [
  {
    id: 1,
    name: "Chicago to Dallas",
    template: "Origin: Chicago, IL; Destination: Dallas, TX; Stop: Indianapolis, IN"
  }
  // Add other routes as needed
];

function MapView() {
  const [routes] = useState(dummyRoutes);
  return (
    <div>
      <h2>Map View</h2>
      {routes.map(route => (
        <div key={route.id}>
          <strong>{route.name}</strong>
          <pre>{route.template}</pre>
        </div>
      ))}
    </div>
  );
}

export default MapView;