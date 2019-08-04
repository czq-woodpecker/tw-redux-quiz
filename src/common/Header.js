import React, {Component} from 'react';
import './header.less';
import { MdDateRange } from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <header>
        <MdDateRange id="homeIcon" ></MdDateRange>
        <h3>NOTES</h3>
      </header>
    );
  }
}

export default Header;