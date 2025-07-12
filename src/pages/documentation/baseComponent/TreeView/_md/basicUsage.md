```tsx
import { useRef, useState } from 'react';
import Tree, { TreeProps } from 'rc-tree';

const MyComponent = () => {
	const treeData = [
		{
			key: '1',
			title: 'Parent 1',
			children: [
				{
					key: '1-1',
					title: 'Parent 1.1',
					children: [
						{ key: '1-1-1', title: 'Parent 1.1.1' },
						{ key: '1-1-2', title: 'Parent 1.1.2' },
					],
				},
				{
					key: '1-2',
					title: 'Parent 1.2',
					children: [
						{ key: '1-2-1', title: 'Parent 1.2.1' },
						{ key: '1-2-2', title: 'Parent 1.2.2' },
						{ key: '1-2-3', title: 'Parent 1.2.3' },
						{ key: '1-2-4', title: 'Parent 1.2.4' },
						{ key: '1-2-5', title: 'Parent 1.2.5' },
						{ key: '1-2-6', title: 'Parent 1.2.6' },
						{ key: '1-2-7', title: 'Parent 1.2.7' },
						{ key: '1-2-8', title: 'Parent 1.2.8' },
						{ key: '1-2-9', title: 'Parent 1.2.9' },
					],
				},
				{
					key: '1-3',
					title: 'Parent 1.3 (Disable)',
					disableCheckbox: true,
					children: [
						{ key: '1-3-1', title: 'Parent 1.3.1 (Disable)', disableCheckbox: true },
						{ key: '1-3-2', title: 'Parent 1.3.2 (Disable)', disableCheckbox: true },
					],
				},
			],
		},
	];

	const keys = ['1-2-2', '1-2-7', '1-2-8'];

	const [defaultSelectedKeys] = useState(keys);
	const [defaultCheckedKeys] = useState(keys);

	const selKeyRef = useRef(null);

	const onExpand: TreeProps['onExpand'] = (expandedKeys) => {
		console.log('onExpand', expandedKeys);
	};

	const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
		selKeyRef.current = info.node.props.eventKey;
	};

	const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
		console.log('onCheck', checkedKeys, info);
	};

	return (
		<Tree
			showLine
			checkable
			selectable={false}
			defaultExpandAll
			onExpand={onExpand}
			defaultSelectedKeys={defaultSelectedKeys}
			defaultCheckedKeys={defaultCheckedKeys}
			onSelect={onSelect}
			onCheck={onCheck}
			treeData={treeData}
		/>
	);
};

export default MyComponent;
```
