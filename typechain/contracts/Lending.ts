/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace ILending {
  export type LendingRequestStruct = {
    id: BigNumberish;
    requester: string;
    amount: BigNumberish;
    status: BigNumberish;
  };

  export type LendingRequestStructOutput = [
    BigNumber,
    string,
    BigNumber,
    number
  ] & { id: BigNumber; requester: string; amount: BigNumber; status: number };
}

export interface LendingInterface extends utils.Interface {
  functions: {
    "approveRequest(uint256)": FunctionFragment;
    "findRequestById(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "rejectRequest(uint256)": FunctionFragment;
    "submitRequest(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveRequest"
      | "findRequestById"
      | "getOwner"
      | "rejectRequest"
      | "submitRequest"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "findRequestById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rejectRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRequest",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findRequestById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rejectRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRequest",
    data: BytesLike
  ): Result;

  events: {
    "LendingRequestApproved(uint256)": EventFragment;
    "LendingRequestRejected(uint256)": EventFragment;
    "LendingRequestSubmitted(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LendingRequestApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingRequestRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingRequestSubmitted"): EventFragment;
}

export interface LendingRequestApprovedEventObject {
  id: BigNumber;
}
export type LendingRequestApprovedEvent = TypedEvent<
  [BigNumber],
  LendingRequestApprovedEventObject
>;

export type LendingRequestApprovedEventFilter =
  TypedEventFilter<LendingRequestApprovedEvent>;

export interface LendingRequestRejectedEventObject {
  id: BigNumber;
}
export type LendingRequestRejectedEvent = TypedEvent<
  [BigNumber],
  LendingRequestRejectedEventObject
>;

export type LendingRequestRejectedEventFilter =
  TypedEventFilter<LendingRequestRejectedEvent>;

export interface LendingRequestSubmittedEventObject {
  from: string;
  amount: BigNumber;
}
export type LendingRequestSubmittedEvent = TypedEvent<
  [string, BigNumber],
  LendingRequestSubmittedEventObject
>;

export type LendingRequestSubmittedEventFilter =
  TypedEventFilter<LendingRequestSubmittedEvent>;

export interface Lending extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    findRequestById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [ILending.LendingRequestStructOutput] & {
        request: ILending.LendingRequestStructOutput;
      }
    >;

    getOwner(overrides?: CallOverrides): Promise<[string] & { _owner: string }>;

    rejectRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    submitRequest(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  approveRequest(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  findRequestById(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ILending.LendingRequestStructOutput>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  rejectRequest(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  submitRequest(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveRequest(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    findRequestById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ILending.LendingRequestStructOutput>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    rejectRequest(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    submitRequest(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "LendingRequestApproved(uint256)"(
      id?: BigNumberish | null
    ): LendingRequestApprovedEventFilter;
    LendingRequestApproved(
      id?: BigNumberish | null
    ): LendingRequestApprovedEventFilter;

    "LendingRequestRejected(uint256)"(
      id?: BigNumberish | null
    ): LendingRequestRejectedEventFilter;
    LendingRequestRejected(
      id?: BigNumberish | null
    ): LendingRequestRejectedEventFilter;

    "LendingRequestSubmitted(address,uint256)"(
      from?: string | null,
      amount?: null
    ): LendingRequestSubmittedEventFilter;
    LendingRequestSubmitted(
      from?: string | null,
      amount?: null
    ): LendingRequestSubmittedEventFilter;
  };

  estimateGas: {
    approveRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    findRequestById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    rejectRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    submitRequest(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    findRequestById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rejectRequest(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    submitRequest(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}