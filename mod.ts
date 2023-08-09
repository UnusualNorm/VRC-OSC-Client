import { augmentConfiguration } from "deno_config";
import { Message } from "osc";

const config = {
  client: {
    hostname: "127.0.0.1",
    // TODO: Clean up the naming
    // The port we need to send data to
    inPort: 9000,
    // The port we need to listen on
    outPort: 9001,
  },
  server: "https://vrc-osc.deno.dev/client",
};

augmentConfiguration(config);

const msg = new Message("/chatbox/input");
msg.append(true);

const conn = Deno.listenDatagram({
  port: config.client.outPort,
  transport: "udp",
});
