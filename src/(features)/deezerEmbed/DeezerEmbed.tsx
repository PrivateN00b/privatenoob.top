import { useState } from "react";
import { BaseContentDiv } from "../../components/div/BaseContentDiv"
import { ArrowButton } from "../../components/img/Arrow";
import { CenteredH2 } from "../../components/text/CenteredHeaders";
import { BaseContentDivProps } from "../../utils/interfaces"
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    border: "0",
    borderRadius: "3% 3% 5% 5%",
    marginBottom: "-5px"
  },
  /* For mobile view DeezerEmbed isn't in one line with Webrings and WebFriends
   and using the BaseContentDiv's marginLeft would make it look janky.
   
   SOLUTION: Just implement the marginLeft functionality separately */
  isLaftLeftHack: { 
    marginLeft: {
      default: "20px",
      ["@media (max-width: 564px)"]: "0px"
    }
  },
  playlistSwitchDiv: {
    display: "flex",
    alignItems: "center", // This will vertically center the items
    justifyContent: "center", // This will horizontally center the items
  }
})

type Playlist = {
  name: string,
  src: string
}

export default function DeezerEmbed({ $isLastBottom }: BaseContentDivProps) {
    const [idx, setIdx] = useState(0);  // Index of the currently selected playlist
    const playlists: Playlist[] = [
      { name: "J-songs", src: "https://widget.deezer.com/widget/auto/playlist/13306681843" },
      { name: "EDM", src: "https://widget.deezer.com/widget/auto/playlist/13306613783" },
      { name: "Rock", src: "https://widget.deezer.com/widget/auto/playlist/13306613683" },
      { name: "Breakcore", src: "https://widget.deezer.com/widget/auto/playlist/13306613203" },
      { name: "Hip-Hop", src: "https://widget.deezer.com/widget/auto/playlist/13361870803" },
      { name: "Randoms", src: "https://widget.deezer.com/widget/auto/playlist/13306613863" },
    ];

    const prevPlaylist = () => {
      idx == 0 ? setIdx(playlists.length - 1) : setIdx(idx - 1)
    }

    const nextPlaylist = () => {
      idx == playlists.length - 1 ? setIdx(0) : setIdx(idx + 1)
    }

    return  <BaseContentDiv $isLastBottom={$isLastBottom} {...stylex.props(styles.isLaftLeftHack)}>
        {/* This is where you can change the playlists */}
        <div {...stylex.props(styles.playlistSwitchDiv)}>
          <ArrowButton
              height={15} 
              ariaLabel="Load previous playlist"
              direction="left"
              onClick={() => prevPlaylist()} />
          <CenteredH2 style={{ marginLeft: "-10px", marginRight: "-10px" }}>🎶 Fav {playlists[idx].name} 🎶</CenteredH2>
          <ArrowButton
              height={15} 
              ariaLabel="Load next playlist"
              direction="right"
              onClick={() => nextPlaylist()} />
        </div>

        <iframe {...stylex.props(styles.base)}
                    title="deezer-widget" 
                    src={playlists[idx].src} 
                    width="100%" 
                    height="400" 
                    allowTransparency={true}
                    loading="lazy"></iframe>
    </BaseContentDiv>
}