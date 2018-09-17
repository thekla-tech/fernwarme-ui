const baseUrl = process.env.REACT_APP_BASE_URL

export async function loadSensors() {
    const rawResponse = await fetch(`${baseUrl}/sensors`)
    return await rawResponse.json()
}

export async function loadBadSpot() {
    const rawResponse = await fetch(`${baseUrl}/badspot`)
    return await rawResponse.json()
}

export async function sendSensorData(sensorId, value) {
  const body = {
    'sensorId': sensorId,
    'value': value,
    'measuredAt': new Date().toISOString()
  }
  await fetch(`${baseUrl}/simulation/${sensorId}/data`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: [JSON.stringify(body)]
  })
}
