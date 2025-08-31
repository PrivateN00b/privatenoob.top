import Container from '../../../components/div/Container';
import { BaseContentDiv } from '../../../components/div/BaseContentDiv';
import { CenteredH1, CenteredH2 } from '../../../components/text/CenteredHeaders';
import StyledParagraph from '../../../components/text/StyledParagraph';
import { Link } from 'react-router-dom';

export default function Links() {
    return <Container>
        <BaseContentDiv>
            <CenteredH1>WE LOVE USEFUL LINKS!</CenteredH1>
            <StyledParagraph>You shall be enlightened by these actually useful or just whatever type of links that seemed fun to include in. :3</StyledParagraph>
            
            <CenteredH2>General</CenteredH2>
            <StyledParagraph>
                <Link to="https://wiki.dbzer0.com/piracy/megathread/">c/ Piracy Megathread:</Link>{" "}
                A collection of links to pirate stuffs, such as games, software, movies, shows for FREE
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://fmhy.net/">freemediaheckyeah / FMHY:</Link>{" "}
                The largest collection of free stuff on the internet!
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://www.goeuropean.org/#products-list">Go European:</Link>{" "}
                A community driven site, where you can find european based alternatives to non-european brands. Note: A lot of smaller EU brands aren't on the list yet
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://join-lemmy.org/">Lemmy:</Link>{" "}
                A federated Reddit alternative. Please join us for some extra additional activity 🙏
            </StyledParagraph>

            <CenteredH2>Web Extensions</CenteredH2>
            <StyledParagraph>
                <Link to="https://libredirect.github.io/">LibRedirect:</Link>{" "}
                A web extension that redirects YouTube, Instagram, Reddit, TikTok and other websites to alternative privacy-friendly frontends.
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://ublockorigin.com/">Ublock Origin:</Link>{" "}
                Does this need any explanation? This is the best adblocker EVER!
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://consentomatic.au.dk/">Consent-O-Matic:</Link>{" "}
                Automatically reject / accept all bullshit popups when entering a privacy invasive website.
            </StyledParagraph>            
            <StyledParagraph>
                <Link to="https://sponsor.ajay.app/">SponsorBlock:</Link>{" "}
                Skip the annoying sponsors on Youtube. No more Raid Shadow Legends for you. ^^
            </StyledParagraph>
            <StyledParagraph>
                <Link to="https://addons.mozilla.org/en-US/firefox/addon/simple-translate/">Simple Translate:</Link>{" "}
                Translate selected text on web pages without needing to visit a specific dictionary website.
            </StyledParagraph>

            <CenteredH2>Website Making</CenteredH2>
            <StyledParagraph>
                <Link to="https://whiteheartrainbowsoul.neocities.org/web_revival_guide/glossary">Web Revival Glossary:</Link>{" "}
                Glossary to understand certain terms used in the Web Revival / Indie Web / Old School Web community.
            </StyledParagraph>
        </BaseContentDiv>
    </Container>
}