```tsx
import Aside, { AsideBody, AsideFooter, AsideHead } from './Aside';
import Wrapper from '@/components/layout/Wrapper';
import { Outlet } from 'react-router';

const DefaultLayout = () => {
	return (
		<>
			<Aside>
				<AsideHead>{/* AsideHead content is here */}</AsideHead>
				<AsideBody>{/* AsideBody content is here */}</AsideBody>
				<AsideFooter>{/* AsideFooter content is here */}</AsideFooter>
			</Aside>
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	);
};

export default DefaultLayout;
```
