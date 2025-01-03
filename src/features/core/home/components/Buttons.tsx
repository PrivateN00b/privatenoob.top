import styled from "styled-components";

const InnerButtons = styled.div`
    display: flex;
    animation: scroll 10s linear infinite;
    gap: var(--gap);

    @keyframes scroll {
        to {
            /* We need to remove the gap amount for seeing a stable animation reset */
            transform: translateX(calc(-100% - var(--gap)));
        }
    }
`;

const ButtonsDiv = styled.div`
    --gap: 10px;
    width: 100%; /* Ensure the container takes the full width */
    display: flex;
    overflow: hidden; /* Hide overflow */
    flex-shrink: 0;
    margin-bottom: 20px;
    gap: var(--gap);

    &:hover ${InnerButtons} {
        animation-play-state: paused;
    }
`;

export default function Buttons() {
    return (
        <ButtonsDiv>
            <InnerButtons>
                <img src="infos/buttons/tested-on-firefox.webp" />
                <img src="infos/buttons/animegay.gif" />
                <img src="infos/buttons/kde-now.gif" />
                <img src="infos/buttons/endeavouros.jpg" />
                <img src="infos/buttons/linux.webp" />
                <img src="infos/buttons/blockads.gif" />
                <img src="infos/buttons/miku3.gif" />
                <img src="infos/buttons/neo-fedi.gif" />
                <img src="infos/buttons/neocities_button.gif" />
                <img src="infos/buttons/old-net.gif" />
                <img src="infos/buttons/piracy.gif" />
                <img src="infos/buttons/seed.gif" />
                <img src="infos/buttons/steam.gif" />
            </InnerButtons>

            {/* Content is duplicated to make the infinite scroll feeling work
            I don't want to use JS to generate the doubled content */}
            <InnerButtons>
                <img src="infos/buttons/tested-on-firefox.webp" />
                <img src="infos/buttons/animegay.gif" />
                <img src="infos/buttons/kde-now.gif" />
                <img src="infos/buttons/endeavouros.jpg" />
                <img src="infos/buttons/linux.webp" />
                <img src="infos/buttons/blockads.gif" />
                <img src="infos/buttons/miku3.gif" />
                <img src="infos/buttons/neo-fedi.gif" />
                <img src="infos/buttons/neocities_button.gif" />
                <img src="infos/buttons/old-net.gif" />
                <img src="infos/buttons/piracy.gif" />
                <img src="infos/buttons/seed.gif" />
                <img src="infos/buttons/steam.gif" />
            </InnerButtons>
        </ButtonsDiv>
    );
}
