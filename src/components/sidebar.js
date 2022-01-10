import useUser from '../hooks/useUser';

export default function SideBar() {
  const x = useUser();
  console.log(x);
  return <div>im the SideBar</div>;
}
