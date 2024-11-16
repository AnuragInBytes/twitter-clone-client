import { IconType } from "react-icons"
import { GoHome } from 'react-icons/go'
import { IoSearch, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5"
import { SlEnvolope } from "react-icons/sl"
import { FaRegBookmark } from "react-icons/fa6"
import { SlOptions } from "react-icons/sl"

interface TwitterSideBarButton {
  title: string;
  icon: IconType;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: 'Home',
    icon: GoHome,
  },
  {
    title: 'Explore',
    icon: IoSearch
  },
  {
    title: 'Notification',
    icon: IoNotificationsOutline
  },
  {
    title: 'Message',
    icon: SlEnvolope
  },
  {
    title: 'Bookmark',
    icon: FaRegBookmark
  },
  {
    title: 'Profile',
    icon: IoPersonOutline
  },
  {
    title: "More",
    icon: SlOptions
  }

]

export default sideBarMenuItems;