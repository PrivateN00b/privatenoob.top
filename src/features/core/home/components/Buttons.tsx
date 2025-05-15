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
                <Button src="infos/buttons/tested-on-firefox.webp" alt=""/>
                <Button src="infos/buttons/animegay.gif" alt=""/>
                <Button src="infos/buttons/kde-now.gif" alt=""/>
                <Button src="infos/buttons/endeavouros.jpg" alt=""/>
                <Button src="infos/buttons/linux.webp" alt=""/>
                <Button src="infos/buttons/blockads.gif" alt=""/>
                <Button src="infos/buttons/miku3.gif" alt=""/>
                <Button src="infos/buttons/neo-fedi.gif" alt=""/>
                <Button src="infos/buttons/neocities_button.gif" alt=""/>
                <Button src="infos/buttons/old-net.gif" alt=""/>
                <Button src="infos/buttons/piracy.gif" alt=""/>
                <Button src="infos/buttons/seed.gif" alt=""/>
                <Button src="infos/buttons/steam.gif" alt=""/>
            </InnerButtons>

            {/* Content is duplicated to make the infinite scroll feeling work
            I don't want to use JS to generate the doubled content */}
            <InnerButtons>
                <Button src="infos/buttons/tested-on-firefox.webp" alt="" loading="lazy"/>
                <Button src="infos/buttons/animegay.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/kde-now.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/endeavouros.jpg" alt="" loading="lazy"/>
                <Button src="infos/buttons/linux.webp" alt="" loading="lazy"/>
                <Button src="infos/buttons/blockads.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/miku3.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/neo-fedi.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/neocities_button.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/old-net.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/piracy.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/seed.gif" alt="" loading="lazy"/>
                <Button src="infos/buttons/steam.gif" alt="" loading="lazy"/>
            </InnerButtons>
        </ButtonsDiv>
    );
}
