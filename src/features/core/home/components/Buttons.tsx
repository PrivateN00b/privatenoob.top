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

const Button = styled.img`
    width: 88px;
    height: 31px;
`

export default function Buttons() {
    return (
        <ButtonsDiv>
            <InnerButtons>
                <Button src="infos/buttons/tested-on-firefox.webp" />
                <Button src="infos/buttons/animegay.gif" />
                <Button src="infos/buttons/kde-now.gif" />
                <Button src="infos/buttons/endeavouros.jpg" />
                <Button src="infos/buttons/linux.webp" />
                <Button src="infos/buttons/blockads.gif" />
                <Button src="infos/buttons/miku3.gif" />
                <Button src="infos/buttons/neo-fedi.gif" />
                <Button src="infos/buttons/neocities_button.gif" />
                <Button src="infos/buttons/old-net.gif" />
                <Button src="infos/buttons/piracy.gif" />
                <Button src="infos/buttons/seed.gif" />
                <Button src="infos/buttons/steam.gif" />
            </InnerButtons>

            {/* Content is duplicated to make the infinite scroll feeling work
            I don't want to use JS to generate the doubled content */}
            <InnerButtons>
                <Button src="infos/buttons/tested-on-firefox.webp" />
                <Button src="infos/buttons/animegay.gif" />
                <Button src="infos/buttons/kde-now.gif" />
                <Button src="infos/buttons/endeavouros.jpg" />
                <Button src="infos/buttons/linux.webp" />
                <Button src="infos/buttons/blockads.gif" />
                <Button src="infos/buttons/miku3.gif" />
                <Button src="infos/buttons/neo-fedi.gif" />
                <Button src="infos/buttons/neocities_button.gif" />
                <Button src="infos/buttons/old-net.gif" />
                <Button src="infos/buttons/piracy.gif" />
                <Button src="infos/buttons/seed.gif" />
                <Button src="infos/buttons/steam.gif" />
            </InnerButtons>
        </ButtonsDiv>
    );
}
