import styled from "styled-components";

const AvatarCard = styled.div`
  background-color: #43f9ff;
  display: grid;
  max-width: 200px;
  margin: 10px auto 10px auto;
  border-radius: 20%;
  border: solid;
`;

const AvatarImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 22% 22% 0% 0%;
  object-fit: cover;
`;

const OnlineIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: #7fff00;
  border-radius: 50%;
  margin-right: 8px;
`;

const OfflineIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: #dc143c;
  border-radius: 50%;
  margin-right: 8px;
`;

function Bio() {
  return (
    <>
      <AvatarCard>
        <AvatarImg
          src="https://i.pinimg.com/564x/37/88/17/3788172348dca4cda1a19d8d131e9167.jpg"
          alt="Avatar"
        />
        {/* <OnlineIndicator /> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OnlineIndicator />
          <h4>PrivateNoob</h4>
        </div>
      </AvatarCard>
    </>
  );
}

export default Bio;
