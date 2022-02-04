import React from "react";
import styled from "styled-components";

const Header = ({ setSideBarToggle, sideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem onClick={() => setSideBarToggle(!sideBarToggle)}>
        <i className="fas fa-bars" />
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-border-all" /> <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>

      <Placeholder />

      <HeaderItem>
        <Profile>
          <img
            src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.6435-9/69575381_2371945522895354_6563990143290572800_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=e3Ii3Sxg5xkAX-CgaXd&_nc_ht=scontent.fotp7-2.fna&oh=00_AT97D_CmzWlvQC508miThOX05RMQ8VZqimEfL-n9UOII1g&oe=61FA1DDE"
            alt="my image"
          />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`;
const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const Placeholder = styled.div`
  flex: 1;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
