export default Page

import Container from '../../../components/div/Container';
import { BaseContentDiv } from '../../../components/div/BaseContentDiv';
import { CenteredH1, CenteredH2 } from '../../../components/text/CenteredHeaders';
import StyledParagraph from '../../../components/text/StyledParagraph';
import { Link } from '../../../components/link/Link';


function Page() {
    return <Container>
        <BaseContentDiv>
            <CenteredH1>WE LOVE USEFUL LINKS!</CenteredH1>
            <StyledParagraph>You shall be enlightened by these actually useful or just whatever type of links that seemed fun to include in. :3</StyledParagraph>
            
            <CenteredH2>General</CenteredH2>
            <StyledParagraph>
                <a href="https://wiki.dbzer0.com/piracy/megathread/">c/ Piracy Megathread:</a>{" "}
                A collection of links to pirate stuffs, such as games, software, movies, shows for FREE
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://fmhy.net/">freemediaheckyeah / FMHY:</a>{" "}
                The largest collection of free stuff on the internet!
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://www.goeuropean.org/#products-list">Go European:</a>{" "}
                A community driven site, where you can find european based alternatives to non-european brands. Note: A lot of smaller EU brands aren't on the list yet
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://join-lemmy.org/">Lemmy:</a>{" "}
                A federated Reddit alternative. Please join us for some extra additional activity 🙏
            </StyledParagraph>

            <CenteredH2>Web Extensions</CenteredH2>
            <StyledParagraph>
                <a href="https://libredirect.github.io/">LibRedirect:</a>{" "}
                A web extension that redirects YouTube, Instagram, Reddit, TikTok and other websites to alternative privacy-friendly frontends.
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://ublockorigin.com/">Ublock Origin:</a>{" "}
                Does this need any explanation? This is the best adblocker EVER!
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://consentomatic.au.dk/">Consent-O-Matic:</a>{" "}
                Automatically reject / accept all bullshit popups when entering a privacy invasive website.
            </StyledParagraph>            
            <StyledParagraph>
                <a href="https://sponsor.ajay.app/">SponsorBlock:</a>{" "}
                Skip the annoying sponsors on Youtube. No more Raid Shadow Legends for you. ^^
            </StyledParagraph>
            <StyledParagraph>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/simple-translate/">Simple Translate:</a>{" "}
                Translate selected text on web pages without needing to visit a specific dictionary website.
            </StyledParagraph>

            <CenteredH2>Website Making</CenteredH2>
            <StyledParagraph>
                <a href="https://whiteheartrainbowsoul.neocities.org/web_revival_guide/glossary">Web Revival Glossary:</a>{" "}
                Glossary to understand certain terms used in the Web Revival / Indie Web / Old School Web community.
            </StyledParagraph>
        </BaseContentDiv>
    </Container>
}