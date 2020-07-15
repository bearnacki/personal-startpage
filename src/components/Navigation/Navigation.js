import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background: inherit;

  &:before {
    content: " ";
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.1);
    filter: blur(5px);
  }
`

const StyledMenuList = styled.ul`
  position: relative;
  padding: 0;
  list-style: none;
  z-index: 2;
  height: 100%;
  text-align: center;
`

const StyledNavItem = styled.li`
  z-index: 10;
  postion: relative;
  margin-left: 20px;
  height: 100%;
  display: inline-block;
`

const StyledLink = styled(Link)`
  color: #FFF;
  padding: 15px 0;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.2em;
  text-shadow: 0 0 1px rgba(255, 255, 255, 1),
               0 0 2px rgba(255, 255, 255, 1),
               0 0 10px rgba(225, 80, 40, 1)
`

const Navigation = () => (
  <NavigationWrapper>
    <StyledMenuList>
      <StyledNavItem>
        <StyledLink to="/">Home</StyledLink>
      </StyledNavItem>
    </StyledMenuList>
  </NavigationWrapper>
)

export default Navigation
