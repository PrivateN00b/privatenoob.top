"use client"

import { useEffect, useState } from "react"
import { WebsiteCarbonBadgeProps } from "./WebsiteCarbonBadge.types"
import styled, { css } from "styled-components"

const Wrapper = styled.div<WebsiteCarbonBadgeProps>`
  --b1: ${props => props.rightBg ? props.rightBg : '#0e11a8'};
  --b2: ${props => props.leftBorderCol || '#00ffbc'};
  --b3: ${props => props.leftBg || '#fff'};
  --b4: ${props => props.leftCol || '#0e11a8'};
  --b5: ${props => props.rightCol || '#fff'};
  --b6: #fff;
  font-size: 15px;
  text-align: center;
  color: var(--b1);
  line-height: 1.15;
`

const LinkCo2 = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: 0.2em 0;
  padding: 0.3em 0.5em;
  border: 0.13em solid var(--b2);
  border-radius: 0.3em 0 0 0.3em;
  background: var(--b3);
  border-right: 0;
  min-width: 8.2em;
  color: var(--b1);
`

const Sub = styled.sub`
  vertical-align: middle;
  position: relative;
  top: 0.3em;
  font-size: 0.7em;
`

const Link = styled.a<WebsiteCarbonBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: 0.2em 0;
  padding: 0.3em 0.5em;
  border: 0.13em solid var(--b2);
  border-radius: 0 0.3em 0.3em 0;
  border-left: 0;
  background: var(--b1);
  color: #fff;
  font-weight: 700;
  border-color: var(--b1);

  ${props =>
    props.dark &&
    css`
      color: var(--b1);
      background: var(--b2);
      border-color: var(--b2);
    `}
`

const Percentage = styled.span<WebsiteCarbonBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: 0.2em 0;
  color: var(--b6);

  ${props =>
    props.dark &&
    css`
      color: #fff;
    `}
`

const CoText = styled.span`
  color: var(--b4);
`

const LinkText = styled.span`
  color: var(--b5);
`

const dict = {
  en: {
    p1: "of",
    p2: "view",
    p3: "Cleaner than",
    p4: "Dirtier than",
    p5: "of pages tested",
  },
  fr: {
    p1: "de",
    p2: "vue",
    p3: "Page web plus légère que",
    p4: "Page web plus lourde que",
    p5: "des pages testées",
  },
}

const WebsiteCarbonBadge = (props: WebsiteCarbonBadgeProps) => {
  const [data, setData] = useState({ co2: "", percentage: "" })

  useEffect(() => {
    const fetchData = async (props: WebsiteCarbonBadgeProps) => {
      let url = props.url ? encodeURIComponent(props.url) : ""
      let data = localStorage.getItem(`wcb_${url}`)

      if (props.co2 && props.percentage) {
        setData({ co2: props.co2, percentage: props.percentage })
      } else if (data) {
        let parsed = JSON.parse(data)
        setData({ co2: parsed.c, percentage: parsed.p })
      } else {
        if (!props.url) {
          throw Error("Website carbon: url is null")
        }

        try {
          const res = await fetch(`https://api.websitecarbon.com/site?url=https%3A%2F%2F${url}%2F`)

          if (!res.ok) throw Error(JSON.stringify(await res.json()))
          const data = await res.json()

          localStorage.setItem(`wcb_${url}`, JSON.stringify(data))

          setData({ co2: data.co2.renewable.grams, percentage: data.cleanerThan })
        } catch (e) {
          console.error(e)
          localStorage.removeItem(`wcb_${url}`)
        }
      }
    }

    fetchData(props).catch(console.error)
  }, [props])

  let ps = props.lang == "fr" ? dict.fr : dict.en

  return (
    <Wrapper 
      className="carbonbadge"
      leftBorderCol={props.leftBorderCol}
      leftBg={props.leftBg}
      leftCol={props.leftCol}
      rightBg={props.rightBg}
      rightCol={props.rightCol} >
        <div>
        <LinkCo2
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.websitecarbon.com/website/${props.url}`}
        >
          <CoText>{data.co2 ? data.co2 : "-"}g {ps.p1} CO<Sub>2</Sub>/{ps.p2}</CoText>
        </LinkCo2>
        <Link
          dark={props.dark}
          target="_blank"
          rel="noopener noreferrer"
          href="https://websitecarbon.com"
        >
          <LinkText>Website Carbon</LinkText>
        </Link>
      </div>
      <Percentage dark={props.dark}>
        {data.percentage
          ? parseInt(data.percentage) > 50
            ? `${ps.p3} ${data.percentage}% ${ps.p5}`
            : `${ps.p4} ${100 - Number(data.percentage)}% ${ps.p5}`
          : ""}
      </Percentage>
    </Wrapper>
  )
}

export default WebsiteCarbonBadge