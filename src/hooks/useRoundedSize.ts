import { TRounded } from '@/types/rounded.type';

const useRoundedSize = (rounded: TRounded | undefined) => {
	const roundedSizes: TRounded[] = [
		'rounded-none',
		'rounded-xs',
		'rounded-sm',
		'rounded-md',
		'rounded-lg',
		'rounded-xl',
		'rounded-2xl',
		'rounded-3xl',
		'rounded-full',
	];

	const index =
		typeof rounded === 'undefined'
			? roundedSizes.indexOf('rounded-sm')
			: roundedSizes.indexOf(rounded);

	const roundedInner = roundedSizes[index - 1];
	const roundedOuter = roundedSizes[index + 1];

	const roundedCustom = (value: number) => roundedSizes[index + value];

	return { roundedInner, roundedOuter, roundedCustom };
};

export default useRoundedSize;
