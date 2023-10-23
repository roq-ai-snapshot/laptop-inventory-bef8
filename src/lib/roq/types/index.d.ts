/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model finance
 *
 */
export type finance = $Result.DefaultSelection<Prisma.$financePayload>;
/**
 * Model inventory
 *
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model laptop
 *
 */
export type laptop = $Result.DefaultSelection<Prisma.$laptopPayload>;
/**
 * Model purchase
 *
 */
export type purchase = $Result.DefaultSelection<Prisma.$purchasePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **finance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Finances
   * const finances = await prisma.finance.findMany()
   * ```
   */
  get finance(): Prisma.financeDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.laptop`: Exposes CRUD operations for the **laptop** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Laptops
   * const laptops = await prisma.laptop.findMany()
   * ```
   */
  get laptop(): Prisma.laptopDelegate<ExtArgs>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **purchase** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Purchases
   * const purchases = await prisma.purchase.findMany()
   * ```
   */
  get purchase(): Prisma.purchaseDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    finance: 'finance';
    inventory: 'inventory';
    laptop: 'laptop';
    purchase: 'purchase';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'finance' | 'inventory' | 'laptop' | 'purchase' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      finance: {
        payload: Prisma.$financePayload<ExtArgs>;
        fields: Prisma.financeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.financeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.financeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          findFirst: {
            args: Prisma.financeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.financeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          findMany: {
            args: Prisma.financeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>[];
          };
          create: {
            args: Prisma.financeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          createMany: {
            args: Prisma.financeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.financeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          update: {
            args: Prisma.financeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          deleteMany: {
            args: Prisma.financeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.financeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.financeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinance>;
          };
          groupBy: {
            args: Prisma.financeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FinanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.financeCountArgs<ExtArgs>;
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number;
          };
        };
      };
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      laptop: {
        payload: Prisma.$laptopPayload<ExtArgs>;
        fields: Prisma.laptopFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.laptopFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.laptopFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          findFirst: {
            args: Prisma.laptopFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.laptopFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          findMany: {
            args: Prisma.laptopFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>[];
          };
          create: {
            args: Prisma.laptopCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          createMany: {
            args: Prisma.laptopCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.laptopDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          update: {
            args: Prisma.laptopUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          deleteMany: {
            args: Prisma.laptopDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.laptopUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.laptopUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          aggregate: {
            args: Prisma.LaptopAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLaptop>;
          };
          groupBy: {
            args: Prisma.laptopGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LaptopGroupByOutputType>[];
          };
          count: {
            args: Prisma.laptopCountArgs<ExtArgs>;
            result: $Utils.Optional<LaptopCountAggregateOutputType> | number;
          };
        };
      };
      purchase: {
        payload: Prisma.$purchasePayload<ExtArgs>;
        fields: Prisma.purchaseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.purchaseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.purchaseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          findFirst: {
            args: Prisma.purchaseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.purchaseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          findMany: {
            args: Prisma.purchaseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>[];
          };
          create: {
            args: Prisma.purchaseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          createMany: {
            args: Prisma.purchaseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.purchaseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          update: {
            args: Prisma.purchaseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          deleteMany: {
            args: Prisma.purchaseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.purchaseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.purchaseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>;
          };
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePurchase>;
          };
          groupBy: {
            args: Prisma.purchaseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PurchaseGroupByOutputType>[];
          };
          count: {
            args: Prisma.purchaseCountArgs<ExtArgs>;
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    finance: number;
    inventory: number;
    laptop: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance?: boolean | CompanyCountOutputTypeCountFinanceArgs;
    inventory?: boolean | CompanyCountOutputTypeCountInventoryArgs;
    laptop?: boolean | CompanyCountOutputTypeCountLaptopArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFinanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: financeWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLaptopArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: laptopWhereInput;
  };

  /**
   * Count Type LaptopCountOutputType
   */

  export type LaptopCountOutputType = {
    inventory: number;
    purchase: number;
  };

  export type LaptopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | LaptopCountOutputTypeCountInventoryArgs;
    purchase?: boolean | LaptopCountOutputTypeCountPurchaseArgs;
  };

  // Custom InputTypes

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopCountOutputType
     */
    select?: LaptopCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeCountPurchaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: purchaseWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    finance: number;
    purchase: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    finance?: boolean | UserCountOutputTypeCountFinanceArgs;
    purchase?: boolean | UserCountOutputTypeCountPurchaseArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: financeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: purchaseWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      finance?: boolean | company$financeArgs<ExtArgs>;
      inventory?: boolean | company$inventoryArgs<ExtArgs>;
      laptop?: boolean | company$laptopArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    finance?: boolean | company$financeArgs<ExtArgs>;
    inventory?: boolean | company$inventoryArgs<ExtArgs>;
    laptop?: boolean | company$laptopArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      finance: Prisma.$financePayload<ExtArgs>[];
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      laptop: Prisma.$laptopPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    finance<T extends company$financeArgs<ExtArgs> = {}>(
      args?: Subset<T, company$financeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'> | Null>;

    inventory<T extends company$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, company$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    laptop<T extends company$laptopArgs<ExtArgs> = {}>(
      args?: Subset<T, company$laptopArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.finance
   */
  export type company$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    where?: financeWhereInput;
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    cursor?: financeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * company.inventory
   */
  export type company$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * company.laptop
   */
  export type company$laptopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    where?: laptopWhereInput;
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    cursor?: laptopWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null;
    _avg: FinanceAvgAggregateOutputType | null;
    _sum: FinanceSumAggregateOutputType | null;
    _min: FinanceMinAggregateOutputType | null;
    _max: FinanceMaxAggregateOutputType | null;
  };

  export type FinanceAvgAggregateOutputType = {
    total_revenue: number | null;
    total_expense: number | null;
    profit: number | null;
  };

  export type FinanceSumAggregateOutputType = {
    total_revenue: number | null;
    total_expense: number | null;
    profit: number | null;
  };

  export type FinanceMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    total_revenue: number | null;
    total_expense: number | null;
    profit: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FinanceMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    total_revenue: number | null;
    total_expense: number | null;
    profit: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FinanceCountAggregateOutputType = {
    id: number;
    user_id: number;
    company_id: number;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FinanceAvgAggregateInputType = {
    total_revenue?: true;
    total_expense?: true;
    profit?: true;
  };

  export type FinanceSumAggregateInputType = {
    total_revenue?: true;
    total_expense?: true;
    profit?: true;
  };

  export type FinanceMinAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    total_revenue?: true;
    total_expense?: true;
    profit?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FinanceMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    total_revenue?: true;
    total_expense?: true;
    profit?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FinanceCountAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    total_revenue?: true;
    total_expense?: true;
    profit?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance to aggregate.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned finances
     **/
    _count?: true | FinanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FinanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FinanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FinanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FinanceMaxAggregateInputType;
  };

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
    [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>;
  };

  export type financeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: financeWhereInput;
    orderBy?: financeOrderByWithAggregationInput | financeOrderByWithAggregationInput[];
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum;
    having?: financeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FinanceCountAggregateInputType | true;
    _avg?: FinanceAvgAggregateInputType;
    _sum?: FinanceSumAggregateInputType;
    _min?: FinanceMinAggregateInputType;
    _max?: FinanceMaxAggregateInputType;
  };

  export type FinanceGroupByOutputType = {
    id: string;
    user_id: string;
    company_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at: Date;
    updated_at: Date;
    _count: FinanceCountAggregateOutputType | null;
    _avg: FinanceAvgAggregateOutputType | null;
    _sum: FinanceSumAggregateOutputType | null;
    _min: FinanceMinAggregateOutputType | null;
    _max: FinanceMaxAggregateOutputType | null;
  };

  type GetFinanceGroupByPayload<T extends financeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FinanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
          : GetScalarType<T[P], FinanceGroupByOutputType[P]>;
      }
    >
  >;

  export type financeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      company_id?: boolean;
      total_revenue?: boolean;
      total_expense?: boolean;
      profit?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['finance']
  >;

  export type financeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    total_revenue?: boolean;
    total_expense?: boolean;
    profit?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type financeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $financePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'finance';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        company_id: string;
        total_revenue: number;
        total_expense: number;
        profit: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['finance']
    >;
    composites: {};
  };

  type financeGetPayload<S extends boolean | null | undefined | financeDefaultArgs> = $Result.GetResult<
    Prisma.$financePayload,
    S
  >;

  type financeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    financeFindManyArgs,
    'select' | 'include'
  > & {
    select?: FinanceCountAggregateInputType | true;
  };

  export interface financeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['finance']; meta: { name: 'finance' } };
    /**
     * Find zero or one Finance that matches the filter.
     * @param {financeFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends financeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, financeFindUniqueArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Finance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {financeFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends financeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__financeClient<
      $Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends financeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindFirstArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends financeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     *
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends financeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Finance.
     * @param {financeCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     *
     **/
    create<T extends financeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, financeCreateArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Finances.
     *     @param {financeCreateManyArgs} args - Arguments to create many Finances.
     *     @example
     *     // Create many Finances
     *     const finance = await prisma.finance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends financeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Finance.
     * @param {financeDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     *
     **/
    delete<T extends financeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, financeDeleteArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Finance.
     * @param {financeUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends financeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpdateArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Finances.
     * @param {financeDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends financeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends financeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Finance.
     * @param {financeUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     **/
    upsert<T extends financeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpsertArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
     **/
    count<T extends financeCountArgs>(
      args?: Subset<T, financeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FinanceAggregateArgs>(
      args: Subset<T, FinanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinanceAggregateType<T>>;

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends financeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: financeGroupByArgs['orderBy'] }
        : { orderBy?: financeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, financeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the finance model
     */
    readonly fields: financeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__financeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the finance model
   */
  interface financeFieldRefs {
    readonly id: FieldRef<'finance', 'String'>;
    readonly user_id: FieldRef<'finance', 'String'>;
    readonly company_id: FieldRef<'finance', 'String'>;
    readonly total_revenue: FieldRef<'finance', 'Int'>;
    readonly total_expense: FieldRef<'finance', 'Int'>;
    readonly profit: FieldRef<'finance', 'Int'>;
    readonly created_at: FieldRef<'finance', 'DateTime'>;
    readonly updated_at: FieldRef<'finance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * finance findUnique
   */
  export type financeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance findUniqueOrThrow
   */
  export type financeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance findFirst
   */
  export type financeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance findFirstOrThrow
   */
  export type financeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance findMany
   */
  export type financeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finances to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance create
   */
  export type financeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The data needed to create a finance.
     */
    data: XOR<financeCreateInput, financeUncheckedCreateInput>;
  };

  /**
   * finance createMany
   */
  export type financeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many finances.
     */
    data: financeCreateManyInput | financeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * finance update
   */
  export type financeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The data needed to update a finance.
     */
    data: XOR<financeUpdateInput, financeUncheckedUpdateInput>;
    /**
     * Choose, which finance to update.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance updateMany
   */
  export type financeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update finances.
     */
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyInput>;
    /**
     * Filter which finances to update
     */
    where?: financeWhereInput;
  };

  /**
   * finance upsert
   */
  export type financeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The filter to search for the finance to update in case it exists.
     */
    where: financeWhereUniqueInput;
    /**
     * In case the finance found by the `where` argument doesn't exist, create a new finance with this data.
     */
    create: XOR<financeCreateInput, financeUncheckedCreateInput>;
    /**
     * In case the finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<financeUpdateInput, financeUncheckedUpdateInput>;
  };

  /**
   * finance delete
   */
  export type financeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter which finance to delete.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance deleteMany
   */
  export type financeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finances to delete
     */
    where?: financeWhereInput;
  };

  /**
   * finance without action
   */
  export type financeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
  };

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    company_id: string | null;
    quantity: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    company_id: string | null;
    quantity: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    laptop_id: number;
    company_id: number;
    quantity: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    laptop_id?: true;
    company_id?: true;
    quantity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    laptop_id?: true;
    company_id?: true;
    quantity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    laptop_id?: true;
    company_id?: true;
    quantity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    laptop_id: string;
    company_id: string;
    quantity: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        laptop_id?: boolean;
        company_id?: boolean;
        quantity?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        laptop?: boolean | laptopDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type inventorySelectScalar = {
    id?: boolean;
    laptop_id?: boolean;
    company_id?: boolean;
    quantity?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    laptop?: boolean | laptopDefaultArgs<ExtArgs>;
  };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'inventory';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      laptop: Prisma.$laptopPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        laptop_id: string;
        company_id: string;
        quantity: number;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    'select' | 'include'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory']; meta: { name: 'inventory' } };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     **/
    create<T extends inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     **/
    delete<T extends inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     **/
    upsert<T extends inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    laptop<T extends laptopDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, laptopDefaultArgs<ExtArgs>>,
    ): Prisma__laptopClient<
      $Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<'inventory', 'String'>;
    readonly laptop_id: FieldRef<'inventory', 'String'>;
    readonly company_id: FieldRef<'inventory', 'String'>;
    readonly quantity: FieldRef<'inventory', 'Int'>;
    readonly status: FieldRef<'inventory', 'String'>;
    readonly created_at: FieldRef<'inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model laptop
   */

  export type AggregateLaptop = {
    _count: LaptopCountAggregateOutputType | null;
    _avg: LaptopAvgAggregateOutputType | null;
    _sum: LaptopSumAggregateOutputType | null;
    _min: LaptopMinAggregateOutputType | null;
    _max: LaptopMaxAggregateOutputType | null;
  };

  export type LaptopAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type LaptopSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type LaptopMinAggregateOutputType = {
    id: string | null;
    model: string | null;
    manufacturer: string | null;
    price: number | null;
    quantity: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LaptopMaxAggregateOutputType = {
    id: string | null;
    model: string | null;
    manufacturer: string | null;
    price: number | null;
    quantity: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LaptopCountAggregateOutputType = {
    id: number;
    model: number;
    manufacturer: number;
    price: number;
    quantity: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LaptopAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type LaptopSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type LaptopMinAggregateInputType = {
    id?: true;
    model?: true;
    manufacturer?: true;
    price?: true;
    quantity?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LaptopMaxAggregateInputType = {
    id?: true;
    model?: true;
    manufacturer?: true;
    price?: true;
    quantity?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LaptopCountAggregateInputType = {
    id?: true;
    model?: true;
    manufacturer?: true;
    price?: true;
    quantity?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LaptopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laptop to aggregate.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned laptops
     **/
    _count?: true | LaptopCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LaptopAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LaptopSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LaptopMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LaptopMaxAggregateInputType;
  };

  export type GetLaptopAggregateType<T extends LaptopAggregateArgs> = {
    [P in keyof T & keyof AggregateLaptop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaptop[P]>
      : GetScalarType<T[P], AggregateLaptop[P]>;
  };

  export type laptopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laptopWhereInput;
    orderBy?: laptopOrderByWithAggregationInput | laptopOrderByWithAggregationInput[];
    by: LaptopScalarFieldEnum[] | LaptopScalarFieldEnum;
    having?: laptopScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LaptopCountAggregateInputType | true;
    _avg?: LaptopAvgAggregateInputType;
    _sum?: LaptopSumAggregateInputType;
    _min?: LaptopMinAggregateInputType;
    _max?: LaptopMaxAggregateInputType;
  };

  export type LaptopGroupByOutputType = {
    id: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LaptopCountAggregateOutputType | null;
    _avg: LaptopAvgAggregateOutputType | null;
    _sum: LaptopSumAggregateOutputType | null;
    _min: LaptopMinAggregateOutputType | null;
    _max: LaptopMaxAggregateOutputType | null;
  };

  type GetLaptopGroupByPayload<T extends laptopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaptopGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LaptopGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LaptopGroupByOutputType[P]>
          : GetScalarType<T[P], LaptopGroupByOutputType[P]>;
      }
    >
  >;

  export type laptopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      model?: boolean;
      manufacturer?: boolean;
      price?: boolean;
      quantity?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      inventory?: boolean | laptop$inventoryArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      purchase?: boolean | laptop$purchaseArgs<ExtArgs>;
      _count?: boolean | LaptopCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['laptop']
  >;

  export type laptopSelectScalar = {
    id?: boolean;
    model?: boolean;
    manufacturer?: boolean;
    price?: boolean;
    quantity?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type laptopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | laptop$inventoryArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    purchase?: boolean | laptop$purchaseArgs<ExtArgs>;
    _count?: boolean | LaptopCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $laptopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'laptop';
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      purchase: Prisma.$purchasePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        model: string;
        manufacturer: string;
        price: number;
        quantity: number;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['laptop']
    >;
    composites: {};
  };

  type laptopGetPayload<S extends boolean | null | undefined | laptopDefaultArgs> = $Result.GetResult<
    Prisma.$laptopPayload,
    S
  >;

  type laptopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    laptopFindManyArgs,
    'select' | 'include'
  > & {
    select?: LaptopCountAggregateInputType | true;
  };

  export interface laptopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['laptop']; meta: { name: 'laptop' } };
    /**
     * Find zero or one Laptop that matches the filter.
     * @param {laptopFindUniqueArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends laptopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, laptopFindUniqueArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Laptop that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {laptopFindUniqueOrThrowArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends laptopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Laptop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindFirstArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends laptopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindFirstArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Laptop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindFirstOrThrowArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends laptopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Laptops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laptops
     * const laptops = await prisma.laptop.findMany()
     *
     * // Get first 10 Laptops
     * const laptops = await prisma.laptop.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const laptopWithIdOnly = await prisma.laptop.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends laptopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Laptop.
     * @param {laptopCreateArgs} args - Arguments to create a Laptop.
     * @example
     * // Create one Laptop
     * const Laptop = await prisma.laptop.create({
     *   data: {
     *     // ... data to create a Laptop
     *   }
     * })
     *
     **/
    create<T extends laptopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, laptopCreateArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Laptops.
     *     @param {laptopCreateManyArgs} args - Arguments to create many Laptops.
     *     @example
     *     // Create many Laptops
     *     const laptop = await prisma.laptop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends laptopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Laptop.
     * @param {laptopDeleteArgs} args - Arguments to delete one Laptop.
     * @example
     * // Delete one Laptop
     * const Laptop = await prisma.laptop.delete({
     *   where: {
     *     // ... filter to delete one Laptop
     *   }
     * })
     *
     **/
    delete<T extends laptopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, laptopDeleteArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Laptop.
     * @param {laptopUpdateArgs} args - Arguments to update one Laptop.
     * @example
     * // Update one Laptop
     * const laptop = await prisma.laptop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends laptopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpdateArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Laptops.
     * @param {laptopDeleteManyArgs} args - Arguments to filter Laptops to delete.
     * @example
     * // Delete a few Laptops
     * const { count } = await prisma.laptop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends laptopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laptops
     * const laptop = await prisma.laptop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends laptopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Laptop.
     * @param {laptopUpsertArgs} args - Arguments to update or create a Laptop.
     * @example
     * // Update or create a Laptop
     * const laptop = await prisma.laptop.upsert({
     *   create: {
     *     // ... data to create a Laptop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laptop we want to update
     *   }
     * })
     **/
    upsert<T extends laptopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpsertArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopCountArgs} args - Arguments to filter Laptops to count.
     * @example
     * // Count the number of Laptops
     * const count = await prisma.laptop.count({
     *   where: {
     *     // ... the filter for the Laptops we want to count
     *   }
     * })
     **/
    count<T extends laptopCountArgs>(
      args?: Subset<T, laptopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaptopCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LaptopAggregateArgs>(
      args: Subset<T, LaptopAggregateArgs>,
    ): Prisma.PrismaPromise<GetLaptopAggregateType<T>>;

    /**
     * Group by Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends laptopGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: laptopGroupByArgs['orderBy'] }
        : { orderBy?: laptopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, laptopGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLaptopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the laptop model
     */
    readonly fields: laptopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for laptop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__laptopClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inventory<T extends laptop$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, laptop$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    purchase<T extends laptop$purchaseArgs<ExtArgs> = {}>(
      args?: Subset<T, laptop$purchaseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the laptop model
   */
  interface laptopFieldRefs {
    readonly id: FieldRef<'laptop', 'String'>;
    readonly model: FieldRef<'laptop', 'String'>;
    readonly manufacturer: FieldRef<'laptop', 'String'>;
    readonly price: FieldRef<'laptop', 'Int'>;
    readonly quantity: FieldRef<'laptop', 'Int'>;
    readonly company_id: FieldRef<'laptop', 'String'>;
    readonly created_at: FieldRef<'laptop', 'DateTime'>;
    readonly updated_at: FieldRef<'laptop', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * laptop findUnique
   */
  export type laptopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop findUniqueOrThrow
   */
  export type laptopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop findFirst
   */
  export type laptopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of laptops.
     */
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop findFirstOrThrow
   */
  export type laptopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of laptops.
     */
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop findMany
   */
  export type laptopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptops to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop create
   */
  export type laptopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The data needed to create a laptop.
     */
    data: XOR<laptopCreateInput, laptopUncheckedCreateInput>;
  };

  /**
   * laptop createMany
   */
  export type laptopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many laptops.
     */
    data: laptopCreateManyInput | laptopCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * laptop update
   */
  export type laptopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The data needed to update a laptop.
     */
    data: XOR<laptopUpdateInput, laptopUncheckedUpdateInput>;
    /**
     * Choose, which laptop to update.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop updateMany
   */
  export type laptopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update laptops.
     */
    data: XOR<laptopUpdateManyMutationInput, laptopUncheckedUpdateManyInput>;
    /**
     * Filter which laptops to update
     */
    where?: laptopWhereInput;
  };

  /**
   * laptop upsert
   */
  export type laptopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The filter to search for the laptop to update in case it exists.
     */
    where: laptopWhereUniqueInput;
    /**
     * In case the laptop found by the `where` argument doesn't exist, create a new laptop with this data.
     */
    create: XOR<laptopCreateInput, laptopUncheckedCreateInput>;
    /**
     * In case the laptop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<laptopUpdateInput, laptopUncheckedUpdateInput>;
  };

  /**
   * laptop delete
   */
  export type laptopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter which laptop to delete.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop deleteMany
   */
  export type laptopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laptops to delete
     */
    where?: laptopWhereInput;
  };

  /**
   * laptop.inventory
   */
  export type laptop$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * laptop.purchase
   */
  export type laptop$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    where?: purchaseWhereInput;
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    cursor?: purchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
  };

  /**
   * laptop without action
   */
  export type laptopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
  };

  /**
   * Model purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
  };

  export type PurchaseAvgAggregateOutputType = {
    quantity: number | null;
    total_price: number | null;
  };

  export type PurchaseSumAggregateOutputType = {
    quantity: number | null;
    total_price: number | null;
  };

  export type PurchaseMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    laptop_id: string | null;
    quantity: number | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PurchaseMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    laptop_id: string | null;
    quantity: number | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PurchaseCountAggregateOutputType = {
    id: number;
    user_id: number;
    laptop_id: number;
    quantity: number;
    total_price: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PurchaseAvgAggregateInputType = {
    quantity?: true;
    total_price?: true;
  };

  export type PurchaseSumAggregateInputType = {
    quantity?: true;
    total_price?: true;
  };

  export type PurchaseMinAggregateInputType = {
    id?: true;
    user_id?: true;
    laptop_id?: true;
    quantity?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PurchaseMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    laptop_id?: true;
    quantity?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PurchaseCountAggregateInputType = {
    id?: true;
    user_id?: true;
    laptop_id?: true;
    quantity?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase to aggregate.
     */
    where?: purchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: purchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned purchases
     **/
    _count?: true | PurchaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PurchaseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PurchaseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PurchaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PurchaseMaxAggregateInputType;
  };

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>;
  };

  export type purchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchaseWhereInput;
    orderBy?: purchaseOrderByWithAggregationInput | purchaseOrderByWithAggregationInput[];
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum;
    having?: purchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseCountAggregateInputType | true;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
  };

  export type PurchaseGroupByOutputType = {
    id: string;
    user_id: string;
    laptop_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
  };

  type GetPurchaseGroupByPayload<T extends purchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PurchaseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
          : GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
      }
    >
  >;

  export type purchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        laptop_id?: boolean;
        quantity?: boolean;
        total_price?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        laptop?: boolean | laptopDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['purchase']
    >;

  export type purchaseSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    laptop_id?: boolean;
    quantity?: boolean;
    total_price?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type purchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laptop?: boolean | laptopDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $purchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'purchase';
    objects: {
      laptop: Prisma.$laptopPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        laptop_id: string;
        quantity: number;
        total_price: number;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['purchase']
    >;
    composites: {};
  };

  type purchaseGetPayload<S extends boolean | null | undefined | purchaseDefaultArgs> = $Result.GetResult<
    Prisma.$purchasePayload,
    S
  >;

  type purchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    purchaseFindManyArgs,
    'select' | 'include'
  > & {
    select?: PurchaseCountAggregateInputType | true;
  };

  export interface purchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchase']; meta: { name: 'purchase' } };
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {purchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends purchaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseFindUniqueArgs<ExtArgs>>,
    ): Prisma__purchaseClient<
      $Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Purchase that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {purchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends purchaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__purchaseClient<
      $Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends purchaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseFindFirstArgs<ExtArgs>>,
    ): Prisma__purchaseClient<
      $Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends purchaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__purchaseClient<
      $Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     *
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends purchaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Purchase.
     * @param {purchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     *
     **/
    create<T extends purchaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseCreateArgs<ExtArgs>>,
    ): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Purchases.
     *     @param {purchaseCreateManyArgs} args - Arguments to create many Purchases.
     *     @example
     *     // Create many Purchases
     *     const purchase = await prisma.purchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends purchaseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Purchase.
     * @param {purchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     *
     **/
    delete<T extends purchaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseDeleteArgs<ExtArgs>>,
    ): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Purchase.
     * @param {purchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends purchaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseUpdateArgs<ExtArgs>>,
    ): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Purchases.
     * @param {purchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends purchaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, purchaseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends purchaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Purchase.
     * @param {purchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     **/
    upsert<T extends purchaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, purchaseUpsertArgs<ExtArgs>>,
    ): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
     **/
    count<T extends purchaseCountArgs>(
      args?: Subset<T, purchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PurchaseAggregateArgs>(
      args: Subset<T, PurchaseAggregateArgs>,
    ): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends purchaseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchaseGroupByArgs['orderBy'] }
        : { orderBy?: purchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, purchaseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the purchase model
     */
    readonly fields: purchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchaseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    laptop<T extends laptopDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, laptopDefaultArgs<ExtArgs>>,
    ): Prisma__laptopClient<
      $Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the purchase model
   */
  interface purchaseFieldRefs {
    readonly id: FieldRef<'purchase', 'String'>;
    readonly user_id: FieldRef<'purchase', 'String'>;
    readonly laptop_id: FieldRef<'purchase', 'String'>;
    readonly quantity: FieldRef<'purchase', 'Int'>;
    readonly total_price: FieldRef<'purchase', 'Int'>;
    readonly status: FieldRef<'purchase', 'String'>;
    readonly created_at: FieldRef<'purchase', 'DateTime'>;
    readonly updated_at: FieldRef<'purchase', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * purchase findUnique
   */
  export type purchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter, which purchase to fetch.
     */
    where: purchaseWhereUniqueInput;
  };

  /**
   * purchase findUniqueOrThrow
   */
  export type purchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter, which purchase to fetch.
     */
    where: purchaseWhereUniqueInput;
  };

  /**
   * purchase findFirst
   */
  export type purchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter, which purchase to fetch.
     */
    where?: purchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for purchases.
     */
    cursor?: purchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
  };

  /**
   * purchase findFirstOrThrow
   */
  export type purchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter, which purchase to fetch.
     */
    where?: purchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for purchases.
     */
    cursor?: purchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
  };

  /**
   * purchase findMany
   */
  export type purchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing purchases.
     */
    cursor?: purchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` purchases.
     */
    skip?: number;
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
  };

  /**
   * purchase create
   */
  export type purchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * The data needed to create a purchase.
     */
    data: XOR<purchaseCreateInput, purchaseUncheckedCreateInput>;
  };

  /**
   * purchase createMany
   */
  export type purchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchases.
     */
    data: purchaseCreateManyInput | purchaseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * purchase update
   */
  export type purchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * The data needed to update a purchase.
     */
    data: XOR<purchaseUpdateInput, purchaseUncheckedUpdateInput>;
    /**
     * Choose, which purchase to update.
     */
    where: purchaseWhereUniqueInput;
  };

  /**
   * purchase updateMany
   */
  export type purchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchases.
     */
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyInput>;
    /**
     * Filter which purchases to update
     */
    where?: purchaseWhereInput;
  };

  /**
   * purchase upsert
   */
  export type purchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * The filter to search for the purchase to update in case it exists.
     */
    where: purchaseWhereUniqueInput;
    /**
     * In case the purchase found by the `where` argument doesn't exist, create a new purchase with this data.
     */
    create: XOR<purchaseCreateInput, purchaseUncheckedCreateInput>;
    /**
     * In case the purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchaseUpdateInput, purchaseUncheckedUpdateInput>;
  };

  /**
   * purchase delete
   */
  export type purchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    /**
     * Filter which purchase to delete.
     */
    where: purchaseWhereUniqueInput;
  };

  /**
   * purchase deleteMany
   */
  export type purchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to delete
     */
    where?: purchaseWhereInput;
  };

  /**
   * purchase without action
   */
  export type purchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      finance?: boolean | user$financeArgs<ExtArgs>;
      purchase?: boolean | user$purchaseArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    finance?: boolean | user$financeArgs<ExtArgs>;
    purchase?: boolean | user$purchaseArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      finance: Prisma.$financePayload<ExtArgs>[];
      purchase: Prisma.$purchasePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    finance<T extends user$financeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$financeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'> | Null>;

    purchase<T extends user$purchaseArgs<ExtArgs> = {}>(
      args?: Subset<T, user$purchaseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.finance
   */
  export type user$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    where?: financeWhereInput;
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    cursor?: financeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * user.purchase
   */
  export type user$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: purchaseInclude<ExtArgs> | null;
    where?: purchaseWhereInput;
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[];
    cursor?: purchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const FinanceScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    company_id: 'company_id';
    total_revenue: 'total_revenue';
    total_expense: 'total_expense';
    profit: 'profit';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    laptop_id: 'laptop_id';
    company_id: 'company_id';
    quantity: 'quantity';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const LaptopScalarFieldEnum: {
    id: 'id';
    model: 'model';
    manufacturer: 'manufacturer';
    price: 'price';
    quantity: 'quantity';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LaptopScalarFieldEnum = (typeof LaptopScalarFieldEnum)[keyof typeof LaptopScalarFieldEnum];

  export const PurchaseScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    laptop_id: 'laptop_id';
    quantity: 'quantity';
    total_price: 'total_price';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    finance?: FinanceListRelationFilter;
    inventory?: InventoryListRelationFilter;
    laptop?: LaptopListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    finance?: financeOrderByRelationAggregateInput;
    inventory?: inventoryOrderByRelationAggregateInput;
    laptop?: laptopOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      finance?: FinanceListRelationFilter;
      inventory?: InventoryListRelationFilter;
      laptop?: LaptopListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type financeWhereInput = {
    AND?: financeWhereInput | financeWhereInput[];
    OR?: financeWhereInput[];
    NOT?: financeWhereInput | financeWhereInput[];
    id?: UuidFilter<'finance'> | string;
    user_id?: UuidFilter<'finance'> | string;
    company_id?: UuidFilter<'finance'> | string;
    total_revenue?: IntFilter<'finance'> | number;
    total_expense?: IntFilter<'finance'> | number;
    profit?: IntFilter<'finance'> | number;
    created_at?: DateTimeFilter<'finance'> | Date | string;
    updated_at?: DateTimeFilter<'finance'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type financeOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type financeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: financeWhereInput | financeWhereInput[];
      OR?: financeWhereInput[];
      NOT?: financeWhereInput | financeWhereInput[];
      user_id?: UuidFilter<'finance'> | string;
      company_id?: UuidFilter<'finance'> | string;
      total_revenue?: IntFilter<'finance'> | number;
      total_expense?: IntFilter<'finance'> | number;
      profit?: IntFilter<'finance'> | number;
      created_at?: DateTimeFilter<'finance'> | Date | string;
      updated_at?: DateTimeFilter<'finance'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type financeOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: financeCountOrderByAggregateInput;
    _avg?: financeAvgOrderByAggregateInput;
    _max?: financeMaxOrderByAggregateInput;
    _min?: financeMinOrderByAggregateInput;
    _sum?: financeSumOrderByAggregateInput;
  };

  export type financeScalarWhereWithAggregatesInput = {
    AND?: financeScalarWhereWithAggregatesInput | financeScalarWhereWithAggregatesInput[];
    OR?: financeScalarWhereWithAggregatesInput[];
    NOT?: financeScalarWhereWithAggregatesInput | financeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'finance'> | string;
    user_id?: UuidWithAggregatesFilter<'finance'> | string;
    company_id?: UuidWithAggregatesFilter<'finance'> | string;
    total_revenue?: IntWithAggregatesFilter<'finance'> | number;
    total_expense?: IntWithAggregatesFilter<'finance'> | number;
    profit?: IntWithAggregatesFilter<'finance'> | number;
    created_at?: DateTimeWithAggregatesFilter<'finance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'finance'> | Date | string;
  };

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    laptop_id?: UuidFilter<'inventory'> | string;
    company_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    status?: StringFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
  };

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    company_id?: SortOrder;
    quantity?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    laptop?: laptopOrderByWithRelationInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      laptop_id?: UuidFilter<'inventory'> | string;
      company_id?: UuidFilter<'inventory'> | string;
      quantity?: IntFilter<'inventory'> | number;
      status?: StringFilter<'inventory'> | string;
      created_at?: DateTimeFilter<'inventory'> | Date | string;
      updated_at?: DateTimeFilter<'inventory'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
    },
    'id'
  >;

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    company_id?: SortOrder;
    quantity?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'inventory'> | string;
    laptop_id?: UuidWithAggregatesFilter<'inventory'> | string;
    company_id?: UuidWithAggregatesFilter<'inventory'> | string;
    quantity?: IntWithAggregatesFilter<'inventory'> | number;
    status?: StringWithAggregatesFilter<'inventory'> | string;
    created_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
  };

  export type laptopWhereInput = {
    AND?: laptopWhereInput | laptopWhereInput[];
    OR?: laptopWhereInput[];
    NOT?: laptopWhereInput | laptopWhereInput[];
    id?: UuidFilter<'laptop'> | string;
    model?: StringFilter<'laptop'> | string;
    manufacturer?: StringFilter<'laptop'> | string;
    price?: IntFilter<'laptop'> | number;
    quantity?: IntFilter<'laptop'> | number;
    company_id?: UuidFilter<'laptop'> | string;
    created_at?: DateTimeFilter<'laptop'> | Date | string;
    updated_at?: DateTimeFilter<'laptop'> | Date | string;
    inventory?: InventoryListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    purchase?: PurchaseListRelationFilter;
  };

  export type laptopOrderByWithRelationInput = {
    id?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    purchase?: purchaseOrderByRelationAggregateInput;
  };

  export type laptopWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: laptopWhereInput | laptopWhereInput[];
      OR?: laptopWhereInput[];
      NOT?: laptopWhereInput | laptopWhereInput[];
      model?: StringFilter<'laptop'> | string;
      manufacturer?: StringFilter<'laptop'> | string;
      price?: IntFilter<'laptop'> | number;
      quantity?: IntFilter<'laptop'> | number;
      company_id?: UuidFilter<'laptop'> | string;
      created_at?: DateTimeFilter<'laptop'> | Date | string;
      updated_at?: DateTimeFilter<'laptop'> | Date | string;
      inventory?: InventoryListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      purchase?: PurchaseListRelationFilter;
    },
    'id'
  >;

  export type laptopOrderByWithAggregationInput = {
    id?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: laptopCountOrderByAggregateInput;
    _avg?: laptopAvgOrderByAggregateInput;
    _max?: laptopMaxOrderByAggregateInput;
    _min?: laptopMinOrderByAggregateInput;
    _sum?: laptopSumOrderByAggregateInput;
  };

  export type laptopScalarWhereWithAggregatesInput = {
    AND?: laptopScalarWhereWithAggregatesInput | laptopScalarWhereWithAggregatesInput[];
    OR?: laptopScalarWhereWithAggregatesInput[];
    NOT?: laptopScalarWhereWithAggregatesInput | laptopScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'laptop'> | string;
    model?: StringWithAggregatesFilter<'laptop'> | string;
    manufacturer?: StringWithAggregatesFilter<'laptop'> | string;
    price?: IntWithAggregatesFilter<'laptop'> | number;
    quantity?: IntWithAggregatesFilter<'laptop'> | number;
    company_id?: UuidWithAggregatesFilter<'laptop'> | string;
    created_at?: DateTimeWithAggregatesFilter<'laptop'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'laptop'> | Date | string;
  };

  export type purchaseWhereInput = {
    AND?: purchaseWhereInput | purchaseWhereInput[];
    OR?: purchaseWhereInput[];
    NOT?: purchaseWhereInput | purchaseWhereInput[];
    id?: UuidFilter<'purchase'> | string;
    user_id?: UuidFilter<'purchase'> | string;
    laptop_id?: UuidFilter<'purchase'> | string;
    quantity?: IntFilter<'purchase'> | number;
    total_price?: IntFilter<'purchase'> | number;
    status?: StringFilter<'purchase'> | string;
    created_at?: DateTimeFilter<'purchase'> | Date | string;
    updated_at?: DateTimeFilter<'purchase'> | Date | string;
    laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type purchaseOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    laptop?: laptopOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type purchaseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: purchaseWhereInput | purchaseWhereInput[];
      OR?: purchaseWhereInput[];
      NOT?: purchaseWhereInput | purchaseWhereInput[];
      user_id?: UuidFilter<'purchase'> | string;
      laptop_id?: UuidFilter<'purchase'> | string;
      quantity?: IntFilter<'purchase'> | number;
      total_price?: IntFilter<'purchase'> | number;
      status?: StringFilter<'purchase'> | string;
      created_at?: DateTimeFilter<'purchase'> | Date | string;
      updated_at?: DateTimeFilter<'purchase'> | Date | string;
      laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type purchaseOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: purchaseCountOrderByAggregateInput;
    _avg?: purchaseAvgOrderByAggregateInput;
    _max?: purchaseMaxOrderByAggregateInput;
    _min?: purchaseMinOrderByAggregateInput;
    _sum?: purchaseSumOrderByAggregateInput;
  };

  export type purchaseScalarWhereWithAggregatesInput = {
    AND?: purchaseScalarWhereWithAggregatesInput | purchaseScalarWhereWithAggregatesInput[];
    OR?: purchaseScalarWhereWithAggregatesInput[];
    NOT?: purchaseScalarWhereWithAggregatesInput | purchaseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'purchase'> | string;
    user_id?: UuidWithAggregatesFilter<'purchase'> | string;
    laptop_id?: UuidWithAggregatesFilter<'purchase'> | string;
    quantity?: IntWithAggregatesFilter<'purchase'> | number;
    total_price?: IntWithAggregatesFilter<'purchase'> | number;
    status?: StringWithAggregatesFilter<'purchase'> | string;
    created_at?: DateTimeWithAggregatesFilter<'purchase'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'purchase'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    finance?: FinanceListRelationFilter;
    purchase?: PurchaseListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    finance?: financeOrderByRelationAggregateInput;
    purchase?: purchaseOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      finance?: FinanceListRelationFilter;
      purchase?: PurchaseListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    finance?: financeCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryCreateNestedManyWithoutCompanyInput;
    laptop?: laptopCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    finance?: financeUncheckedCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    finance?: financeUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    finance?: financeUncheckedUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financeCreateInput = {
    id?: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutFinanceInput;
    user: userCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    company_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutFinanceNestedInput;
    user?: userUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeCreateManyInput = {
    id?: string;
    user_id: string;
    company_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateInput = {
    id?: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutInventoryInput;
    laptop: laptopCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    id?: string;
    laptop_id: string;
    company_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutInventoryNestedInput;
    laptop?: laptopUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyInput = {
    id?: string;
    laptop_id: string;
    company_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopCreateInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    company: companyCreateNestedOneWithoutLaptopInput;
    purchase?: purchaseCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUncheckedCreateInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
    purchase?: purchaseUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    company?: companyUpdateOneRequiredWithoutLaptopNestedInput;
    purchase?: purchaseUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
    purchase?: purchaseUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopCreateManyInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type laptopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseCreateInput = {
    id?: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutPurchaseInput;
    user: userCreateNestedOneWithoutPurchaseInput;
  };

  export type purchaseUncheckedCreateInput = {
    id?: string;
    user_id: string;
    laptop_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutPurchaseNestedInput;
    user?: userUpdateOneRequiredWithoutPurchaseNestedInput;
  };

  export type purchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseCreateManyInput = {
    id?: string;
    user_id: string;
    laptop_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
    purchase?: purchaseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    purchase?: purchaseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type FinanceListRelationFilter = {
    every?: financeWhereInput;
    some?: financeWhereInput;
    none?: financeWhereInput;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type LaptopListRelationFilter = {
    every?: laptopWhereInput;
    some?: laptopWhereInput;
    none?: laptopWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type financeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type laptopOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type financeCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeAvgOrderByAggregateInput = {
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
  };

  export type financeMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeSumOrderByAggregateInput = {
    total_revenue?: SortOrder;
    total_expense?: SortOrder;
    profit?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type LaptopRelationFilter = {
    is?: laptopWhereInput;
    isNot?: laptopWhereInput;
  };

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    company_id?: SortOrder;
    quantity?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    company_id?: SortOrder;
    quantity?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    company_id?: SortOrder;
    quantity?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type PurchaseListRelationFilter = {
    every?: purchaseWhereInput;
    some?: purchaseWhereInput;
    none?: purchaseWhereInput;
  };

  export type purchaseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type laptopCountOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type laptopAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type laptopMaxOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type laptopMinOrderByAggregateInput = {
    id?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type laptopSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type purchaseCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type purchaseAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    total_price?: SortOrder;
  };

  export type purchaseMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type purchaseMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type purchaseSumOrderByAggregateInput = {
    quantity?: SortOrder;
    total_price?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type financeCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>
      | financeCreateWithoutCompanyInput[]
      | financeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: financeCreateOrConnectWithoutCompanyInput | financeCreateOrConnectWithoutCompanyInput[];
    createMany?: financeCreateManyCompanyInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>
      | inventoryCreateWithoutCompanyInput[]
      | inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutCompanyInput | inventoryCreateOrConnectWithoutCompanyInput[];
    createMany?: inventoryCreateManyCompanyInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type laptopCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>
      | laptopCreateWithoutCompanyInput[]
      | laptopUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutCompanyInput | laptopCreateOrConnectWithoutCompanyInput[];
    createMany?: laptopCreateManyCompanyInputEnvelope;
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
  };

  export type financeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>
      | financeCreateWithoutCompanyInput[]
      | financeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: financeCreateOrConnectWithoutCompanyInput | financeCreateOrConnectWithoutCompanyInput[];
    createMany?: financeCreateManyCompanyInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>
      | inventoryCreateWithoutCompanyInput[]
      | inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutCompanyInput | inventoryCreateOrConnectWithoutCompanyInput[];
    createMany?: inventoryCreateManyCompanyInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type laptopUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>
      | laptopCreateWithoutCompanyInput[]
      | laptopUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutCompanyInput | laptopCreateOrConnectWithoutCompanyInput[];
    createMany?: laptopCreateManyCompanyInputEnvelope;
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type financeUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>
      | financeCreateWithoutCompanyInput[]
      | financeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: financeCreateOrConnectWithoutCompanyInput | financeCreateOrConnectWithoutCompanyInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutCompanyInput | financeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: financeCreateManyCompanyInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutCompanyInput | financeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: financeUpdateManyWithWhereWithoutCompanyInput | financeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>
      | inventoryCreateWithoutCompanyInput[]
      | inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutCompanyInput | inventoryCreateOrConnectWithoutCompanyInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutCompanyInput | inventoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: inventoryCreateManyCompanyInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutCompanyInput | inventoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutCompanyInput | inventoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type laptopUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>
      | laptopCreateWithoutCompanyInput[]
      | laptopUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutCompanyInput | laptopCreateOrConnectWithoutCompanyInput[];
    upsert?: laptopUpsertWithWhereUniqueWithoutCompanyInput | laptopUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: laptopCreateManyCompanyInputEnvelope;
    set?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    disconnect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    delete?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    update?: laptopUpdateWithWhereUniqueWithoutCompanyInput | laptopUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: laptopUpdateManyWithWhereWithoutCompanyInput | laptopUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: laptopScalarWhereInput | laptopScalarWhereInput[];
  };

  export type financeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>
      | financeCreateWithoutCompanyInput[]
      | financeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: financeCreateOrConnectWithoutCompanyInput | financeCreateOrConnectWithoutCompanyInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutCompanyInput | financeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: financeCreateManyCompanyInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutCompanyInput | financeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: financeUpdateManyWithWhereWithoutCompanyInput | financeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>
      | inventoryCreateWithoutCompanyInput[]
      | inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutCompanyInput | inventoryCreateOrConnectWithoutCompanyInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutCompanyInput | inventoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: inventoryCreateManyCompanyInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutCompanyInput | inventoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutCompanyInput | inventoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type laptopUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>
      | laptopCreateWithoutCompanyInput[]
      | laptopUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutCompanyInput | laptopCreateOrConnectWithoutCompanyInput[];
    upsert?: laptopUpsertWithWhereUniqueWithoutCompanyInput | laptopUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: laptopCreateManyCompanyInputEnvelope;
    set?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    disconnect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    delete?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    update?: laptopUpdateWithWhereUniqueWithoutCompanyInput | laptopUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: laptopUpdateManyWithWhereWithoutCompanyInput | laptopUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: laptopScalarWhereInput | laptopScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutFinanceInput = {
    create?: XOR<companyCreateWithoutFinanceInput, companyUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: companyCreateOrConnectWithoutFinanceInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFinanceInput = {
    create?: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinanceInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<companyCreateWithoutFinanceInput, companyUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: companyCreateOrConnectWithoutFinanceInput;
    upsert?: companyUpsertWithoutFinanceInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutFinanceInput, companyUpdateWithoutFinanceInput>,
      companyUncheckedUpdateWithoutFinanceInput
    >;
  };

  export type userUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinanceInput;
    upsert?: userUpsertWithoutFinanceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinanceInput, userUpdateWithoutFinanceInput>,
      userUncheckedUpdateWithoutFinanceInput
    >;
  };

  export type companyCreateNestedOneWithoutInventoryInput = {
    create?: XOR<companyCreateWithoutInventoryInput, companyUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: companyCreateOrConnectWithoutInventoryInput;
    connect?: companyWhereUniqueInput;
  };

  export type laptopCreateNestedOneWithoutInventoryInput = {
    create?: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutInventoryInput;
    connect?: laptopWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<companyCreateWithoutInventoryInput, companyUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: companyCreateOrConnectWithoutInventoryInput;
    upsert?: companyUpsertWithoutInventoryInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutInventoryInput, companyUpdateWithoutInventoryInput>,
      companyUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type laptopUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutInventoryInput;
    upsert?: laptopUpsertWithoutInventoryInput;
    connect?: laptopWhereUniqueInput;
    update?: XOR<
      XOR<laptopUpdateToOneWithWhereWithoutInventoryInput, laptopUpdateWithoutInventoryInput>,
      laptopUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type inventoryCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutLaptopInput = {
    create?: XOR<companyCreateWithoutLaptopInput, companyUncheckedCreateWithoutLaptopInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLaptopInput;
    connect?: companyWhereUniqueInput;
  };

  export type purchaseCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>
      | purchaseCreateWithoutLaptopInput[]
      | purchaseUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutLaptopInput | purchaseCreateOrConnectWithoutLaptopInput[];
    createMany?: purchaseCreateManyLaptopInputEnvelope;
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type purchaseUncheckedCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>
      | purchaseCreateWithoutLaptopInput[]
      | purchaseUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutLaptopInput | purchaseCreateOrConnectWithoutLaptopInput[];
    createMany?: purchaseCreateManyLaptopInputEnvelope;
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
  };

  export type inventoryUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutLaptopInput | inventoryUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutLaptopInput | inventoryUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutLaptopInput | inventoryUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutLaptopNestedInput = {
    create?: XOR<companyCreateWithoutLaptopInput, companyUncheckedCreateWithoutLaptopInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLaptopInput;
    upsert?: companyUpsertWithoutLaptopInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutLaptopInput, companyUpdateWithoutLaptopInput>,
      companyUncheckedUpdateWithoutLaptopInput
    >;
  };

  export type purchaseUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>
      | purchaseCreateWithoutLaptopInput[]
      | purchaseUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutLaptopInput | purchaseCreateOrConnectWithoutLaptopInput[];
    upsert?: purchaseUpsertWithWhereUniqueWithoutLaptopInput | purchaseUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: purchaseCreateManyLaptopInputEnvelope;
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    update?: purchaseUpdateWithWhereUniqueWithoutLaptopInput | purchaseUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: purchaseUpdateManyWithWhereWithoutLaptopInput | purchaseUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutLaptopInput | inventoryUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutLaptopInput | inventoryUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutLaptopInput | inventoryUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type purchaseUncheckedUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>
      | purchaseCreateWithoutLaptopInput[]
      | purchaseUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutLaptopInput | purchaseCreateOrConnectWithoutLaptopInput[];
    upsert?: purchaseUpsertWithWhereUniqueWithoutLaptopInput | purchaseUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: purchaseCreateManyLaptopInputEnvelope;
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    update?: purchaseUpdateWithWhereUniqueWithoutLaptopInput | purchaseUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: purchaseUpdateManyWithWhereWithoutLaptopInput | purchaseUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
  };

  export type laptopCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<laptopCreateWithoutPurchaseInput, laptopUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutPurchaseInput;
    connect?: laptopWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<userCreateWithoutPurchaseInput, userUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: userCreateOrConnectWithoutPurchaseInput;
    connect?: userWhereUniqueInput;
  };

  export type laptopUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<laptopCreateWithoutPurchaseInput, laptopUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutPurchaseInput;
    upsert?: laptopUpsertWithoutPurchaseInput;
    connect?: laptopWhereUniqueInput;
    update?: XOR<
      XOR<laptopUpdateToOneWithWhereWithoutPurchaseInput, laptopUpdateWithoutPurchaseInput>,
      laptopUncheckedUpdateWithoutPurchaseInput
    >;
  };

  export type userUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<userCreateWithoutPurchaseInput, userUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: userCreateOrConnectWithoutPurchaseInput;
    upsert?: userUpsertWithoutPurchaseInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPurchaseInput, userUpdateWithoutPurchaseInput>,
      userUncheckedUpdateWithoutPurchaseInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type purchaseCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
      | purchaseCreateWithoutUserInput[]
      | purchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[];
    createMany?: purchaseCreateManyUserInputEnvelope;
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type purchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
      | purchaseCreateWithoutUserInput[]
      | purchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[];
    createMany?: purchaseCreateManyUserInputEnvelope;
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutUserInput | financeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutUserInput | financeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: financeUpdateManyWithWhereWithoutUserInput | financeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type purchaseUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
      | purchaseCreateWithoutUserInput[]
      | purchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[];
    upsert?: purchaseUpsertWithWhereUniqueWithoutUserInput | purchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: purchaseCreateManyUserInputEnvelope;
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    update?: purchaseUpdateWithWhereUniqueWithoutUserInput | purchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: purchaseUpdateManyWithWhereWithoutUserInput | purchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutUserInput | financeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutUserInput | financeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: financeUpdateManyWithWhereWithoutUserInput | financeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type purchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
      | purchaseCreateWithoutUserInput[]
      | purchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[];
    upsert?: purchaseUpsertWithWhereUniqueWithoutUserInput | purchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: purchaseCreateManyUserInputEnvelope;
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[];
    update?: purchaseUpdateWithWhereUniqueWithoutUserInput | purchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: purchaseUpdateManyWithWhereWithoutUserInput | purchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutUserInput;
    purchase?: purchaseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    purchase?: purchaseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type financeCreateWithoutCompanyInput = {
    id?: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeCreateOrConnectWithoutCompanyInput = {
    where: financeWhereUniqueInput;
    create: XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>;
  };

  export type financeCreateManyCompanyInputEnvelope = {
    data: financeCreateManyCompanyInput | financeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryCreateWithoutCompanyInput = {
    id?: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutCompanyInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutCompanyInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>;
  };

  export type inventoryCreateManyCompanyInputEnvelope = {
    data: inventoryCreateManyCompanyInput | inventoryCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type laptopCreateWithoutCompanyInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    purchase?: purchaseCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutCompanyInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
    purchase?: purchaseUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutCompanyInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>;
  };

  export type laptopCreateManyCompanyInputEnvelope = {
    data: laptopCreateManyCompanyInput | laptopCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type financeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: financeWhereUniqueInput;
    update: XOR<financeUpdateWithoutCompanyInput, financeUncheckedUpdateWithoutCompanyInput>;
    create: XOR<financeCreateWithoutCompanyInput, financeUncheckedCreateWithoutCompanyInput>;
  };

  export type financeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: financeWhereUniqueInput;
    data: XOR<financeUpdateWithoutCompanyInput, financeUncheckedUpdateWithoutCompanyInput>;
  };

  export type financeUpdateManyWithWhereWithoutCompanyInput = {
    where: financeScalarWhereInput;
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type financeScalarWhereInput = {
    AND?: financeScalarWhereInput | financeScalarWhereInput[];
    OR?: financeScalarWhereInput[];
    NOT?: financeScalarWhereInput | financeScalarWhereInput[];
    id?: UuidFilter<'finance'> | string;
    user_id?: UuidFilter<'finance'> | string;
    company_id?: UuidFilter<'finance'> | string;
    total_revenue?: IntFilter<'finance'> | number;
    total_expense?: IntFilter<'finance'> | number;
    profit?: IntFilter<'finance'> | number;
    created_at?: DateTimeFilter<'finance'> | Date | string;
    updated_at?: DateTimeFilter<'finance'> | Date | string;
  };

  export type inventoryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutCompanyInput, inventoryUncheckedUpdateWithoutCompanyInput>;
    create: XOR<inventoryCreateWithoutCompanyInput, inventoryUncheckedCreateWithoutCompanyInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutCompanyInput, inventoryUncheckedUpdateWithoutCompanyInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutCompanyInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    laptop_id?: UuidFilter<'inventory'> | string;
    company_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    status?: StringFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
  };

  export type laptopUpsertWithWhereUniqueWithoutCompanyInput = {
    where: laptopWhereUniqueInput;
    update: XOR<laptopUpdateWithoutCompanyInput, laptopUncheckedUpdateWithoutCompanyInput>;
    create: XOR<laptopCreateWithoutCompanyInput, laptopUncheckedCreateWithoutCompanyInput>;
  };

  export type laptopUpdateWithWhereUniqueWithoutCompanyInput = {
    where: laptopWhereUniqueInput;
    data: XOR<laptopUpdateWithoutCompanyInput, laptopUncheckedUpdateWithoutCompanyInput>;
  };

  export type laptopUpdateManyWithWhereWithoutCompanyInput = {
    where: laptopScalarWhereInput;
    data: XOR<laptopUpdateManyMutationInput, laptopUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type laptopScalarWhereInput = {
    AND?: laptopScalarWhereInput | laptopScalarWhereInput[];
    OR?: laptopScalarWhereInput[];
    NOT?: laptopScalarWhereInput | laptopScalarWhereInput[];
    id?: UuidFilter<'laptop'> | string;
    model?: StringFilter<'laptop'> | string;
    manufacturer?: StringFilter<'laptop'> | string;
    price?: IntFilter<'laptop'> | number;
    quantity?: IntFilter<'laptop'> | number;
    company_id?: UuidFilter<'laptop'> | string;
    created_at?: DateTimeFilter<'laptop'> | Date | string;
    updated_at?: DateTimeFilter<'laptop'> | Date | string;
  };

  export type companyCreateWithoutFinanceInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    inventory?: inventoryCreateNestedManyWithoutCompanyInput;
    laptop?: laptopCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutFinanceInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutFinanceInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutFinanceInput, companyUncheckedCreateWithoutFinanceInput>;
  };

  export type userCreateWithoutFinanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    purchase?: purchaseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    purchase?: purchaseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinanceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
  };

  export type companyUpsertWithoutFinanceInput = {
    update: XOR<companyUpdateWithoutFinanceInput, companyUncheckedUpdateWithoutFinanceInput>;
    create: XOR<companyCreateWithoutFinanceInput, companyUncheckedCreateWithoutFinanceInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutFinanceInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutFinanceInput, companyUncheckedUpdateWithoutFinanceInput>;
  };

  export type companyUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    inventory?: inventoryUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutFinanceInput = {
    update: XOR<userUpdateWithoutFinanceInput, userUncheckedUpdateWithoutFinanceInput>;
    create: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinanceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinanceInput, userUncheckedUpdateWithoutFinanceInput>;
  };

  export type userUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    purchase?: purchaseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    finance?: financeCreateNestedManyWithoutCompanyInput;
    laptop?: laptopCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    finance?: financeUncheckedCreateNestedManyWithoutCompanyInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutInventoryInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutInventoryInput, companyUncheckedCreateWithoutInventoryInput>;
  };

  export type laptopCreateWithoutInventoryInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLaptopInput;
    purchase?: purchaseCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutInventoryInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    purchase?: purchaseUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutInventoryInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
  };

  export type companyUpsertWithoutInventoryInput = {
    update: XOR<companyUpdateWithoutInventoryInput, companyUncheckedUpdateWithoutInventoryInput>;
    create: XOR<companyCreateWithoutInventoryInput, companyUncheckedCreateWithoutInventoryInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutInventoryInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutInventoryInput, companyUncheckedUpdateWithoutInventoryInput>;
  };

  export type companyUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    finance?: financeUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    finance?: financeUncheckedUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type laptopUpsertWithoutInventoryInput = {
    update: XOR<laptopUpdateWithoutInventoryInput, laptopUncheckedUpdateWithoutInventoryInput>;
    create: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    where?: laptopWhereInput;
  };

  export type laptopUpdateToOneWithWhereWithoutInventoryInput = {
    where?: laptopWhereInput;
    data: XOR<laptopUpdateWithoutInventoryInput, laptopUncheckedUpdateWithoutInventoryInput>;
  };

  export type laptopUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLaptopNestedInput;
    purchase?: purchaseUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase?: purchaseUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type inventoryCreateWithoutLaptopInput = {
    id?: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutLaptopInput = {
    id?: string;
    company_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>;
  };

  export type inventoryCreateManyLaptopInputEnvelope = {
    data: inventoryCreateManyLaptopInput | inventoryCreateManyLaptopInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutLaptopInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    finance?: financeCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutLaptopInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    finance?: financeUncheckedCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutLaptopInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutLaptopInput, companyUncheckedCreateWithoutLaptopInput>;
  };

  export type purchaseCreateWithoutLaptopInput = {
    id?: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPurchaseInput;
  };

  export type purchaseUncheckedCreateWithoutLaptopInput = {
    id?: string;
    user_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseCreateOrConnectWithoutLaptopInput = {
    where: purchaseWhereUniqueInput;
    create: XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>;
  };

  export type purchaseCreateManyLaptopInputEnvelope = {
    data: purchaseCreateManyLaptopInput | purchaseCreateManyLaptopInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryUpsertWithWhereUniqueWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutLaptopInput, inventoryUncheckedUpdateWithoutLaptopInput>;
    create: XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutLaptopInput, inventoryUncheckedUpdateWithoutLaptopInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutLaptopInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutLaptopInput>;
  };

  export type companyUpsertWithoutLaptopInput = {
    update: XOR<companyUpdateWithoutLaptopInput, companyUncheckedUpdateWithoutLaptopInput>;
    create: XOR<companyCreateWithoutLaptopInput, companyUncheckedCreateWithoutLaptopInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutLaptopInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutLaptopInput, companyUncheckedUpdateWithoutLaptopInput>;
  };

  export type companyUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    finance?: financeUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    finance?: financeUncheckedUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type purchaseUpsertWithWhereUniqueWithoutLaptopInput = {
    where: purchaseWhereUniqueInput;
    update: XOR<purchaseUpdateWithoutLaptopInput, purchaseUncheckedUpdateWithoutLaptopInput>;
    create: XOR<purchaseCreateWithoutLaptopInput, purchaseUncheckedCreateWithoutLaptopInput>;
  };

  export type purchaseUpdateWithWhereUniqueWithoutLaptopInput = {
    where: purchaseWhereUniqueInput;
    data: XOR<purchaseUpdateWithoutLaptopInput, purchaseUncheckedUpdateWithoutLaptopInput>;
  };

  export type purchaseUpdateManyWithWhereWithoutLaptopInput = {
    where: purchaseScalarWhereInput;
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyWithoutLaptopInput>;
  };

  export type purchaseScalarWhereInput = {
    AND?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
    OR?: purchaseScalarWhereInput[];
    NOT?: purchaseScalarWhereInput | purchaseScalarWhereInput[];
    id?: UuidFilter<'purchase'> | string;
    user_id?: UuidFilter<'purchase'> | string;
    laptop_id?: UuidFilter<'purchase'> | string;
    quantity?: IntFilter<'purchase'> | number;
    total_price?: IntFilter<'purchase'> | number;
    status?: StringFilter<'purchase'> | string;
    created_at?: DateTimeFilter<'purchase'> | Date | string;
    updated_at?: DateTimeFilter<'purchase'> | Date | string;
  };

  export type laptopCreateWithoutPurchaseInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    company: companyCreateNestedOneWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutPurchaseInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutPurchaseInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutPurchaseInput, laptopUncheckedCreateWithoutPurchaseInput>;
  };

  export type userCreateWithoutPurchaseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPurchaseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPurchaseInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPurchaseInput, userUncheckedCreateWithoutPurchaseInput>;
  };

  export type laptopUpsertWithoutPurchaseInput = {
    update: XOR<laptopUpdateWithoutPurchaseInput, laptopUncheckedUpdateWithoutPurchaseInput>;
    create: XOR<laptopCreateWithoutPurchaseInput, laptopUncheckedCreateWithoutPurchaseInput>;
    where?: laptopWhereInput;
  };

  export type laptopUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: laptopWhereInput;
    data: XOR<laptopUpdateWithoutPurchaseInput, laptopUncheckedUpdateWithoutPurchaseInput>;
  };

  export type laptopUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    company?: companyUpdateOneRequiredWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type userUpsertWithoutPurchaseInput = {
    update: XOR<userUpdateWithoutPurchaseInput, userUncheckedUpdateWithoutPurchaseInput>;
    create: XOR<userCreateWithoutPurchaseInput, userUncheckedCreateWithoutPurchaseInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPurchaseInput, userUncheckedUpdateWithoutPurchaseInput>;
  };

  export type userUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    finance?: financeCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryCreateNestedManyWithoutCompanyInput;
    laptop?: laptopCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    finance?: financeUncheckedCreateNestedManyWithoutCompanyInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type financeCreateWithoutUserInput = {
    id?: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeCreateOrConnectWithoutUserInput = {
    where: financeWhereUniqueInput;
    create: XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>;
  };

  export type financeCreateManyUserInputEnvelope = {
    data: financeCreateManyUserInput | financeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type purchaseCreateWithoutUserInput = {
    id?: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutPurchaseInput;
  };

  export type purchaseUncheckedCreateWithoutUserInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseCreateOrConnectWithoutUserInput = {
    where: purchaseWhereUniqueInput;
    create: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>;
  };

  export type purchaseCreateManyUserInputEnvelope = {
    data: purchaseCreateManyUserInput | purchaseCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type financeUpsertWithWhereUniqueWithoutUserInput = {
    where: financeWhereUniqueInput;
    update: XOR<financeUpdateWithoutUserInput, financeUncheckedUpdateWithoutUserInput>;
    create: XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>;
  };

  export type financeUpdateWithWhereUniqueWithoutUserInput = {
    where: financeWhereUniqueInput;
    data: XOR<financeUpdateWithoutUserInput, financeUncheckedUpdateWithoutUserInput>;
  };

  export type financeUpdateManyWithWhereWithoutUserInput = {
    where: financeScalarWhereInput;
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyWithoutUserInput>;
  };

  export type purchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: purchaseWhereUniqueInput;
    update: XOR<purchaseUpdateWithoutUserInput, purchaseUncheckedUpdateWithoutUserInput>;
    create: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>;
  };

  export type purchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: purchaseWhereUniqueInput;
    data: XOR<purchaseUpdateWithoutUserInput, purchaseUncheckedUpdateWithoutUserInput>;
  };

  export type purchaseUpdateManyWithWhereWithoutUserInput = {
    where: purchaseScalarWhereInput;
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyWithoutUserInput>;
  };

  export type financeCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateManyCompanyInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type laptopCreateManyCompanyInput = {
    id?: string;
    model: string;
    manufacturer: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    purchase?: purchaseUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
    purchase?: purchaseUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyLaptopInput = {
    id?: string;
    company_id: string;
    quantity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseCreateManyLaptopInput = {
    id?: string;
    user_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPurchaseNestedInput;
  };

  export type purchaseUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseUncheckedUpdateManyWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type financeCreateManyUserInput = {
    id?: string;
    company_id: string;
    total_revenue: number;
    total_expense: number;
    profit: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type purchaseCreateManyUserInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    finance?: financeUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    finance?: financeUncheckedUpdateManyWithoutCompanyNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    total_revenue?: IntFieldUpdateOperationsInput | number;
    total_expense?: IntFieldUpdateOperationsInput | number;
    profit?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutPurchaseNestedInput;
  };

  export type purchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type purchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LaptopCountOutputTypeDefaultArgs instead
   */
  export type LaptopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LaptopCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use financeDefaultArgs instead
   */
  export type financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    financeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use inventoryDefaultArgs instead
   */
  export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use laptopDefaultArgs instead
   */
  export type laptopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    laptopDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use purchaseDefaultArgs instead
   */
  export type purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    purchaseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
