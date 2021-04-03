import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
    tabName: 'Trang chủ'
  },
  {
    name: 'Calendar',
    component: CalendarScreen,
    icon: iconCalendar,
    tabName: 'Lịch làm việc'
  },
  {
    name: 'Grids',
    component: GridsScreen,
    icon: iconGrids,
    tabName: 'Theo dõi HT'
  },
  {
    name: 'Components',
    component: ComponentsScreen,
    icon: iconComponents,
    tabName: 'Cài đặt'
  },
];

export default tabNavigationData;