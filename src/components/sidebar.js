import useUser from '../hooks/useUser';

export default function SideBar() {
  console.log(useUser());
  return <div>im the SideBar</div>;
}
