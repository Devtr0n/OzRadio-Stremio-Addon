# OzRadio Stremio Addon

Welcome to the OzRadio Stremio Addon, the ultimate solution for streaming Australian radio stations via Stremio. This addon provides access to a variety of popular Australian radio stations, including Triple J, Nova, Smooth FM, and Star FM.

## Features

- **Stream Multiple Stations**: Enjoy live streaming from a selection of popular Australian radio stations.
- **Current Song Information**: Get real-time updates on the currently playing songs for Triple J stations.
- **Easy Integration**: Seamlessly integrate with your Stremio setup.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Devtr0n/OzRadio-Stremio-Addon.git
   cd OzRadio-Stremio-Addon

2. **Install Dependencies**
   ```bash
   npm install
   
3. **Start the server**
   ```bash
   npm start

### Configuration
The addon runs on port 3000 by default. You can change this by setting the PORT environment variable:
   ```
   export PORT=5000
   npm start
```
### Usage
You can access the addon via Stremio by navigating to the appropriate endpoint on your local server. For example:
```http://localhost:3000/stream/music/triplej.json```

### Endpoints
Here are the available endpoints:
- Triple J: ```/stream/music/triplej.json```
- Nova: ```/stream/music/nova.json```
- Smooth FM: ```/stream/music/smoothfm.json```
- Star: ```/stream/music/star.json```

### Triple J Station Streams
The following streams are available for Triple J:
- Triple J Adelaide
- Triple J Brisbane
- Triple J Darwin
- Triple J Perth
- Triple J Sydney

### Nova Station Streams
The following streams are available for Nova:

- Nova Adelaide 91.9 FM
- Nova Perth 93.7 FM
- Nova Sydney 96.9 FM
- Nova Melbourne 100 FM
- Nova Brisbane 106.9 FM
- Nova Fresh Country
- Nova Nation Sydney
- Nova Throwbacks
- Nova 90s

### Smooth FM Station Streams
The following stream is available for Smooth FM:
- Smooth 95.3 FM Sydney

### Star FM Station Streams
The following stream is available for Star FM:
- Star 104.5 FM Central Coast

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
- Inspiration and data from [ABC Radio](https://www.abc.net.au/radio)
- Radio streams provided by various Australian radio stations