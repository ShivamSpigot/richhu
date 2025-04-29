const RPC = require('discord-rpc');
const clientId = '1366616674094157905'; // Your application client ID from Discord Developer Portal

RPC.register(clientId);

const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  // Setting the Rich Presence
  rpc.setActivity({
    details: 'Competitive',  // Example: "Playing Competitive"
    state: 'Playing Solo',  // Example: "Solo"
    startTimestamp: Math.floor(Date.now() / 1000),  // Start time as UNIX timestamp
    endTimestamp: Math.floor(Date.now() / 1000) + 3600,  // Example: 1 hour later for the end time
    largeImageKey: 'numbani',  // Image key (must be uploaded in Discord Developer Portal)
    largeImageText: 'Numbani',  // Tooltip for large image
    smallImageKey: 'rogue',  // Image key for the small image
    smallImageText: 'Rogue - Level 100',  // Tooltip for small image
    partyId: 'ae488379-351d-4a4f-ad32-2b9b01c91657',  // Optional: Party ID
    partySize: 1,  // Current size of the party
    partyMax: 5,  // Maximum size of the party
    joinSecret: 'MTI4NzM0OjFpMmhuZToxMjMxMjM=',  // Optional: Join secret for allowing others to join
    instance: false,  // Optional: Set to true if this is a special instance
  });
});

rpc.login({ clientId }).catch(console.error);
