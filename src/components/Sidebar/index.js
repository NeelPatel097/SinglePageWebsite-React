import React from "react";
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        Home
                    </SidebarLink>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="solutions">
                        Solutions
                    </SidebarLink>
                    <SidebarLink to="founder">
                        Founder
                    </SidebarLink>
                    <SidebarLink to="career">
                        Career
                    </SidebarLink>
                    <SidebarLink to="career">
                        Get in touch
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>

        </SidebarContainer>
    );
};

export default Sidebar;