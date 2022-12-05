
export class FextyParameter {
	public parameter1 = -1;
	public parameter2 = -1;
	public suffix = '';
}

export class FextyRule {
	private name: string | undefined = undefined;
	private parameterList: FextyParameter[] = [];
	private defaultParameter: FextyParameter | undefined = undefined;

	constructor(name: string | undefined, parameterList: FextyParameter[], defaultParameter: FextyParameter | undefined = undefined) {
		this.name = name;
		this.parameterList = parameterList;
		this.defaultParameter = defaultParameter;
	}

	public hasName(): boolean {
		return !!this.name;
	}

	public hasDefaultParameter(): boolean {
		return !!this.defaultParameter;
	}

	public get Name(): string | undefined {
		return this.name;
	}

	public get ParameterList(): FextyParameter[] {
		return this.parameterList;
	}

	public get DefaultParameter(): FextyParameter | undefined {
		return this.defaultParameter;
	}
}

export class FextyInlineRule {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	public get Name(): string {
		return this.name;
	}
}

export class FextyFile {
	public useHex = false;
	public rules: Map<number, FextyRule | FextyInlineRule> = new Map<number, FextyRule | FextyInlineRule>();
}
