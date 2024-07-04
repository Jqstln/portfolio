// src/app/projects/[project]/page.js

import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
            Sed vitae est cursus, blandit nibh in, convallis quam. Ut turpis metus, commodo eu elit
            id, consectetur maximus lectus. Proin id volutpat eros. Donec mollis urna auctor, porta
            nisl non, maximus augue. Nulla consectetur dignissim tincidunt. Integer ultrices lacinia
            nibh, eu pulvinar ante venenatis id. Maecenas lobortis risus non tellus pretium
            scelerisque. Donec lobortis ultrices libero vel congue.
            <br />
            Mauris a viverra elit, ut porttitor ipsum. Mauris magna ex, luctus ac hendrerit at,
            luctus eu urna. Etiam dictum porta nunc quis aliquam. Praesent non fermentum purus.
            Morbi semper, arcu nec ultricies hendrerit, tortor orci molestie orci, et fermentum orci
            quam vel ipsum. Suspendisse viverra, magna fringilla rhoncus dapibus, augue velit
            pharetra magna, sed tristique mauris augue vel erat. Donec viverra est non diam iaculis,
            sed facilisis justo ornare. In in feugiat dolor, et accumsan risus. Etiam sed mi
            pharetra, egestas diam non, placerat nisi.
            <br />
            In orci mi, iaculis vel sapien quis, convallis bibendum mi. Sed laoreet faucibus nisi
            sit amet ullamcorper. Nulla viverra placerat sagittis. Proin rhoncus auctor diam et
            porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse volutpat
            metus vel tincidunt tempor. Ut in sodales ante, ut dignissim tellus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer
            dictum, libero et fringilla condimentum, orci lorem gravida diam, facilisis porta felis
            justo quis est.
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
      <h2 className="mb-6 text-center text-lg font-bold md:text-xl">
        Sample code used for a plugin in OaseMC
      </h2>
      <div className="mx-auto mb-12 w-full overflow-y-auto rounded-lg bg-[#282C34] p-4 text-white">
        <SyntaxHighlighter language="java" style={atomOneDark}>
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
