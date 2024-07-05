// src/app/projects/[project]/page.js

import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function OaseMCProject() {
  const codeString = `@EventHandler
public void onPlayerMove(PlayerMoveEvent event) {
    Player player = event.getPlayer();
    UUID playerUUID = player.getUniqueId();
    Location lastLocation = lastLocations.getOrDefault(playerUUID, player.getLocation());

    double distance = lastLocation.distance(player.getLocation());

    if (distance >= coin_threshold) {
        addCoins(playerUUID, 1);
        player.sendMessage("Je hebt meer dan " + (int) distance + " blokken gelopen en je hebt daarbij 1 coin verdiend. Totale coins: " + getCoins(playerUUID));
        lastLocations.put(playerUUID, player.getLocation());
    }
`;

  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <h1 className="mb-6 text-center text-4xl font-bold md:text-6xl">OaseMC</h1>
      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="mb-6 text-base md:text-lg">
            OaseMC, a Dutch Minecraft Server, offered a variety of game modes, with survival being its main attraction. The survival server was known for its extensive features and immersive gameplay, providing a fulfilling experience for all its players. It included custom world generation, which crafted unique landscapes and settings, adding depth to the gameplay. Players could also enhance their experience with in-game purchases, as shown in the accompanying photo.

            The server gained popularity through platforms like TikTok and Discord, where a vibrant community of players gathered to share their experiences and participate in server events.

            Unfortunately, OaseMC has closed down. Despite this, there is hope among its dedicated community that the server may reopen in the future. Many players look back fondly on their time spent on OaseMC and eagerly anticipate the possibility of returning to its virtual world.
          </p>
        </div>
        <div className="grid">
          <img
            src="https://placehold.co/320x240"
            alt="Image 1"
            className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <h2 className="mb-6 text-left text-lg font-bold md:text-xl">
        Sample code used for a plugin in OaseMC
      </h2>
      <div className="mx-auto mb-12 w-full overflow-y-auto rounded-lg bg-[#1D1F21] p-4 text-white">
        <SyntaxHighlighter language="java" showLineNumbers="true" style={atomDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="mt-10 text-center">
        <Link href="/projects">
          <button className="rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-blue-600">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
