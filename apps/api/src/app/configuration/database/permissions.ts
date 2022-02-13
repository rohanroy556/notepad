import { ActionType, FeatureType, PermissionDto, RoleType } from "@notepad/models";

export const PERMISSIONS: ReadonlyArray<PermissionDto> = [
	{
		feature: FeatureType.PERMISSION,
		action: ActionType.CREATE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.PERMISSION,
		action: ActionType.UPDATE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.PERMISSION,
		action: ActionType.READ,
		condition: {
			'or': [
				{
					'==': [
						{ 'var': 'user.role.name' },
						RoleType.ADMIN
					]
				},
				{
					'in': [
						{ 'var': 'resource._id' },
						{
							'map': [
								{ 'var': 'user.role.permissions' },
								{ 'var': '_id' }
							]
						}
					]
				}
			]
		}
	},
	{
		feature: FeatureType.PERMISSION,
		action: ActionType.DELETE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.ROLE,
		action: ActionType.CREATE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.ROLE,
		action: ActionType.UPDATE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.ROLE,
		action: ActionType.READ,
		condition: {
			'or': [
				{
					'==': [
						{ 'var': 'user.role.name' },
						RoleType.ADMIN
					]
				},
				{
					'==': [
						{ 'var': 'resource._id' },
						{ 'var': 'user.role._id' }
					]
				}
			]
		}
	},
	{
		feature: FeatureType.ROLE,
		action: ActionType.DELETE,
		condition: {
			'==': [
				{ 'var': 'user.role.name' },
				RoleType.ADMIN
			]
		}
	},
	{
		feature: FeatureType.USER,
		action: ActionType.CREATE,
		condition: true
	},
	{
		feature: FeatureType.USER,
		action: ActionType.UPDATE,
		condition: {
			'or': [
				{
					'==': [
						{ 'var': 'user.role.name' },
						RoleType.ADMIN
					]
				},
				{
					'==': [
						{ 'var': 'resource._id' },
						{ 'var': 'user._id' }
					]
				}
			]
		}
	},
	{
		feature: FeatureType.USER,
		action: ActionType.READ,
		condition: {
			'or': [
				{
					'==': [
						{ 'var': 'user.role.name' },
						RoleType.ADMIN
					]
				},
				{
					'==': [
						{ 'var': 'resource._id' },
						{ 'var': 'user._id' }
					]
				}
			]
		}
	},
	{
		feature: FeatureType.USER,
		action: ActionType.DELETE,
		condition: {
			'or': [
				{
					'==': [
						{ 'var': 'user.role.name' },
						RoleType.ADMIN
					]
				},
				{
					'==': [
						{ 'var': 'resource._id' },
						{ 'var': 'user._id' }
					]
				}
			]
		}
	},
	{
		feature: FeatureType.NOTE,
		action: ActionType.CREATE,
		condition: true
	},
	{
		feature: FeatureType.NOTE,
		action: ActionType.UPDATE,
		condition: {
			'==': [
				{ 'var': 'user._id' },
				{ 'var': 'resource.author' }
			]
		}
	},
	{
		feature: FeatureType.NOTE,
		action: ActionType.READ,
		condition: {
			'==': [
				{ 'var': 'user._id' },
				{ 'var': 'resource.author' }
			]
		}
	},
	{
		feature: FeatureType.NOTE,
		action: ActionType.DELETE,
		condition: {
			'==': [
				{ 'var': 'user._id' },
				{ 'var': 'resource.author' }
			]
		}
	}
];
