/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Profiles from '@juridoc/client-profiles';

/**
 * Notification entity class.
 */
@RestDB.Schema.Entity('notifications')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Notification Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * List of target grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Notification section.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public section!: string;

  /**
   * Notification action.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public action!: string;

  /**
   * Notification parameters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public parameters!: RestDB.Map<any>;
}
